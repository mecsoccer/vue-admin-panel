<template>
  <UserFormLayout title="User list">
		<template #action-button>
			<md-button class="md-raised md-primary">add new</md-button>
		</template>
		<template #children>
			<UserListTable :users="users" />
		</template>
	</UserFormLayout>
</template>

<script>
import Vue from "vue";
import { usersService } from "../services/users/users";
import { fetchUsersPath } from "../services/users/paths";
import UserFormLayout from "../components/layouts/UserFormLayout.vue";
import UserListTable from "../components/tables/usersList/UserListTable.vue";
import { MdButton } from 'vue-material/dist/components'

Vue.use(MdButton);

export default {
	name: 'Index',
  components: {
    UserFormLayout,
    UserListTable,
  },
  data() {
    return {
      users: []
    }
  },
  mounted() {
      usersService().get(fetchUsersPath)
        .then(res => this.users = res.data);
  }
}
</script>
