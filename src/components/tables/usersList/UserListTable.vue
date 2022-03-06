<template>
  <div class="users-list-table">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>City</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            <td>
              <md-button href="/update">Edit</md-button>
            </td>
            <td>
              <md-button class="md-raised md-accent">Delete</md-button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "UserListTable",
  
}
</script>

<style lang="scss" scoped>
  @import 'user-list-table.scss'
</style>
