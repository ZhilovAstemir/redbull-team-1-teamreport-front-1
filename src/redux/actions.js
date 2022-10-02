const UPDATE_TITLE = "UPDATE_TITLE";

export const updateTitle = (title) => (
  async dispatch => {
    if(!title) return
    return {
      type: UPDATE_TITLE,
      payload: title,
    }
  }
)