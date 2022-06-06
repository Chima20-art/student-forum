export async function createPost(postedBy, content, category) {
  try {
    let response = await fetch(
      'https://us-central1-studentforum-f11ce.cloudfunctions.net/createPost',
      {
        method: 'POST', // or 'PUT'

        body: JSON.stringify({
          postedBy,
          category,
          content,
        }),
      }
    );
    console.log('response', response);
    let responseText = await response.text();
    let json = await JSON.parse(responseText);

    return json;
  } catch (error) {
    console.log('there was an error calling createPost');
    console.log(error);
  }
}

export async function createComment(postedBy, content) {
  try {
    let response = await fetch(
      'https://us-central1-studentforum-f11ce.cloudfunctions.net/createComment',
      {
        method: 'POST', // or 'PUT'

        body: JSON.stringify({
          postedBy,
          content,
        }),
      }
    );
    console.log('response ', response);
    let responseText = await response.text();
    let json = await JSON.parse(responseText);

    return json;
  } catch (error) {
    console.log('there was an error calling createComment');
    console.log(error);
    return null;
  }
}
export async function addPostComment(commentId, postId) {
  try {
    let response = await fetch(
      'https://us-central1-studentforum-f11ce.cloudfunctions.net/addPostComment',
      {
        method: 'POST', // or 'PUT'

        body: JSON.stringify({
          commentId,
          postId,
        }),
      }
    );
    console.log('response', response);
    let responseText = await response.text();
    let json = await JSON.parse(responseText);
    return json;
  } catch (error) {
    console.log('there was an error calling addPostComment');
    console.log(error);
    return null;
  }
}
export async function getAllPosts() {
  try {
    let response = await fetch(
      'https://us-central1-studentforum-f11ce.cloudfunctions.net/getAllPosts',
      {
        method: 'GET', // or 'PUT'
        redirect: 'follow',
      }
    );
    console.log('response ', response);
    let responseText = await response.text();
    let json = await JSON.parse(responseText);

    return json;
  } catch (error) {
    console.log('there was an error calling getAllPosts');
    console.log(error);
    return null;
  }
}
export async function addPostLike(userId, postId) {
  try {
    let response = await fetch(
      'https://us-central1-studentforum-f11ce.cloudfunctions.net/addPostLike',
      {
        method: 'POST', // or 'PUT'
        redirect: 'follow',
        body: JSON.stringify({
          userId,
          postId,
        }),
      }
    );
    console.log('response ', response);
    let responseText = await response.text();
    let json = await JSON.parse(responseText);

    return json;
  } catch (error) {
    console.log('there was an error calling addPostLike');
    console.log(error);
    return null;
  }
}
export async function getPostsByCategory(category, cursor = 0) {
  try {
    let response = await fetch(
      'https://us-central1-studentforum-f11ce.cloudfunctions.net/getPostsByCategory',
      {
        method: 'POST', // or 'PUT'
        redirect: 'follow',
        body: JSON.stringify({
          category,
          cursor,
        }),
      }
    );
    let responseText = await response.text();
    let json = await JSON.parse(responseText);

    return json;
  } catch (error) {
    console.log('there was an error calling getPostsByCategory');
    console.log(error);
    return null;
  }
}
export async function createCategory(name, description) {
  try {
    let response = await fetch(
      'https://us-central1-studentforum-f11ce.cloudfunctions.net/createCategory',
      {
        method: 'POST', // or 'PUT'

        body: JSON.stringify({
          name,
          description,
        }),
      }
    );
    console.log('response ', response);
    let responseText = await response.text();
    let json = await JSON.parse(responseText);

    return json;
  } catch (error) {
    console.log('there was an error calling createCategory');
    console.log(error);
    return null;
  }
}
export async function getPost(id) {
  try {
    let response = await fetch(
      'https://us-central1-studentforum-f11ce.cloudfunctions.net/getPost',
      {
        method: 'POST', // or 'PUT'

        body: JSON.stringify({
          id,
        }),
      }
    );

    let responseText = await response.text();
    let json = await JSON.parse(responseText);
    console.log('post by id', json);
    return json;
  } catch (error) {
    console.log('there was an error calling getPost');
    console.log(error);
    return null;
  }
}
