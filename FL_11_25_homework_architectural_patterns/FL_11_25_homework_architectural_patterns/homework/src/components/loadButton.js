class Button {
    addUsers(users) {

        let output = `
        <div class="load-component">
          <p class="displayed-users">
            Displayed
            <span class="displayed-users> ${users} </span>
            users out of
            <span class="full-list-users> ${users} </span>
          </p>
          <button class="load-more-button" ${users <= 0 ? 'disabled' : null}> Load more </button>
        </div>
        `

        return output;
    }
}

export default Button;