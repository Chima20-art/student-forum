export function createPost(postedBy, content, category) {
  fetch(
    'https://us-central1-studentforum-f11ce.cloudfunctions.net/createPost',
    {
      method: 'POST', // or 'PUT'

      body: JSON.stringify({
        postedBy,
        category,
        content,
      }),
    }
  )
    .then((response) => response.text())
    .then((data) => {
      const json = JSON.parse(data);
      console.log('Success:', json);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
}
