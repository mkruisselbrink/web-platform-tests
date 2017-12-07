const blob = new Blob(['test']);
const file = new File(['test'], 'name');

test(() => {
  const url_count = 10000;
  let list = [];

  for (let i = 0; i <= url_count; ++i)
    list.push(URL.createObjectURL(blob));

  list.sort();

  for (let i = 0; i < url_count; ++i)
    assert_not_equals(list[i], list[i+1], 'generated Blob URLs should be unique');
}, 'Check whether generated Blob URLs are unique');

test(() => {
  const url = URL.createObjectURL(blob);
  assert_equals(typeof url, 'string');
  assert_true(url.startsWith('blob:'));
}, 'Check if the Blob URL starts with "blob:"');

test(() => {
  const url = URL.createObjectURL(file);
  assert_equals(typeof url, 'string');
  assert_true(url.startsWith('blob:'));
}, 'Check if the Blob URL starts with "blob:" for Files');

test(() => {
  const url = URL.createObjectURL(blob);
  assert_equals(new URL(url).origin, location.origin);
  if (location.origin != 'null') {
    assert_true(url.includes(location.origin));
    assert_true(url.startsWith('blob:' + location.protocol));
  }
}, 'Verify if origin of Blob URL matches our origin');

test(() => {
  const url = URL.createObjectURL(blob);
  const url_record = new URL(url);
  assert_equals(url_record.protocol, 'blob:');
  assert_equals(url_record.origin, location.origin);
  assert_equals(url_record.host, '');
  assert_equals(url_record.port, '');
  const path_re = /\/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  assert_true(path_re.test(url_record.pathname), 'Path must end with a valid UUID');
  if (location.origin != 'null') {
    const nested_url = new URL(url_record.pathname);
    assert_equals(nested_url.origin, location.origin);
    assert_equals(nested_url.pathname.search(path_re), 0, 'Path must be a valid UUID');
    assert_true(url.includes(location.origin));
    assert_true(url.startsWith('blob:' + location.protocol));
  }
}, 'Verify if Blob URL parses correctly');

test(() => {
  const url = URL.createObjectURL(file);
  assert_equals(new URL(url).origin, location.origin);
  if (location.origin != 'null') {
    assert_true(url.includes(location.origin));
    assert_true(url.startsWith('blob:' + location.protocol));
  }
}, 'Verify if origin of Blob URL matches our origin for Files');
