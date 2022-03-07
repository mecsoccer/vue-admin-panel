<template>
  <UserFormLayout title="Update User">
		<template #children>
			<div>sdsdsassdf</div>
		</template>
	</UserFormLayout>
</template>

<script>
import Vue from "vue";
import { usersService } from "../services/users/users";
import { fetchUsersPath } from "../services/users/paths";
import UserFormLayout from "../components/layouts/UserFormLayout.vue";
import { MdButton } from 'vue-material/dist/components'

Vue.use(MdButton);

export default {
	name: 'Update',
  components: {
    UserFormLayout,
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
