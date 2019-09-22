class User{
    createUser(currentUser){
        let output = '';
        currentUser.forEach(x => {
            output += `
            <tr class="user-row">
            <td class="user_cell">
                <img src="${x.picture}" alt="" />
            </td>
            <td class="user_cell"> ${x.name} </td>
            <td class="user_cell"> ${x.location} </td>
            <td class="user_cell"> ${x.email} </td>
            <td class="user_cell"> ${x.phone} </td>
            <td class="user_cell"> ${x.timezone} </td>
            <td class="user-cell-remove">
                  <button data-id="${x.id}" class="remove-button" type="button">
                    Remove
                  </button>
                </td>
            </tr>
            `
            return output;
        });
    }
}

export default User;