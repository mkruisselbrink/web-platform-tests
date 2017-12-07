
async_test(t => {
  const run_result = 'test_script_OK';
  const blob_contents = 'var test_result = "' + run_result + '";';
  const blob = new Blob([blob_contents]);
  const url = URL.createObjectURL(blob);

  const e = document.createElement('script');
  e.setAttribute('type', 'text/javascript');
  e.setAttribute('src', url);
  e.onload = t.step_func_done(() => {
    assert_equals(test_result, run_result);
  });

  document.body.appendChild(e);
}, 'Check whether Blob URLs can be used in <script> tags');

async_test(t => {
  const run_result = 'test_frame_OK';
  const blob_contents = '<!doctype html>\n<meta charset="utf-8">\n<script>window.test_result = "' + run_result + '";</script>';
  const blob = new Blob([blob_contents], {type: 'text/html'});
  const url = URL.createObjectURL(blob);

  const e = document.createElement('iframe');
  e.setAttribute('src', url);
  e.setAttribute('style', 'display:none;');
  document.body.appendChild(e);

  e.contentWindow.document.body.onload = t.step_func_done(() => {
    assert_equals(e.contentWindow.test_result, run_result);
  });
}, 'Check whether Blob URLs can be used in iframes, and are treated same origin');

async_test(t => {
  const scroll_position = 5000;
  const blob_contents = '<!doctype html>\n<meta charset="utf-8">\n' +
    '<style>body { margin: 0; } .block { height: 5000px; }</style>\n' +
    '<body>\n' +
    '<a id="block1"></a><div class="block"></div>\n' +
    '<a id="block2"></a><div class="block"></div>';
  const blob = new Blob([blob_contents], {type: 'text/html'});
  const url = URL.createObjectURL(blob);

  const e = document.createElement('iframe');
  e.setAttribute('src', url + '#block2');
  document.body.appendChild(e);

  e.contentWindow.document.body.onload = t.step_func_done(() => {
    assert_equals(e.contentWindow.scrollY, 5000);
  });
}, 'Check whether the Blob URL fragment is implemented.');
