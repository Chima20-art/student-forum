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
    let responseText = await response.text();

    let json = await JSON.parse(responseText);

    return json;
  } catch (error) {
    console.log('there was an error calling createComment');
    console.log(error);
    return null;
  }
}

export async function addCommentLike(commentId, userId) {
  try {
    let response = await fetch(
      'https://us-central1-studentforum-f11ce.cloudfunctions.net/addCommentLike',
      {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({
          commentId,
          userId,
        }),
      }
    );
    let responseText = await response.text();

    let json = await JSON.parse(responseText);

    return json;
  } catch (error) {
    console.log('there was an error calling createComment');
    console.log(error);
    return null;
  }
}

export async function removeComment(commentId) {
  try {
    let response = await fetch(
      'https://us-central1-studentforum-f11ce.cloudfunctions.net/removeComment',
      {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({
          id: commentId,
        }),
      }
    );
    let responseText = await response.text();

    //let json = await JSON.parse(responseText);

    return responseText;
  } catch (error) {
    console.log('there was an error calling createComment');
    console.log(error);
    return null;
  }
}

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

export async function getAllPosts(cursor) {
  try {
    let response = await fetch(
      'https://us-central1-studentforum-f11ce.cloudfunctions.net/getAllPosts',
      {
        method: 'POST', // or 'PUT'
        redirect: 'follow',
        body: JSON.stringify({
          cursor: cursor,
        }),
      }
    );
    //console.log('response ', response);
    let responseText = await response.text();
    let json = await JSON.parse(responseText);

    return json;
  } catch (error) {
    console.log('there was an error calling getAllPosts');
    console.log(error);
    return null;
  }
}

export async function getPostsByCategory(category, cursor) {
  try {
    let response = await fetch(
      'https://us-central1-studentforum-f11ce.cloudfunctions.net/getPostsByCategory2',
      {
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify({
          category: category,
          cursor: cursor,
        }),
      }
    );
    let responseText = await response.text();
    let json = await JSON.parse(responseText);

    return json;
  } catch (error) {
    console.log('there was an error calling getAllPosts');
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

    return json;
  } catch (error) {
    console.log('there was an error calling getPost');
    console.log(error);
    return null;
  }
}

export async function getAllCategories() {
  try {
    let response = await fetch(
      'https://us-central1-studentforum-f11ce.cloudfunctions.net/getAllCategories',
      {
        method: 'GET', // or 'PUT'
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

export async function getUsersByIds(ids) {
  if (!Array.isArray(ids)) ids = [ids];
  try {
    let response = await fetch(
      'https://us-central1-studentforum-f11ce.cloudfunctions.net/getUsersByIds',
      {
        method: 'POST',
        body: JSON.stringify({
          ids: ids,
        }),
      }
    );
    let responseText = await response.text();
    console.log('responseText ', responseText);
    let json = await JSON.parse(responseText);
    return json;
  } catch (error) {
    console.log('there was an error calling getPost');
    console.log(error);
    return null;
  }
}
