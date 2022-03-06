<template>
  <UserFormLayout title="User list">
		<template #action-button>
			<md-button class="md-raised md-primary">add new</md-button>
		</template>
		<template #children>
			<UserListTable />
		</template>
	</UserFormLayout>
</template>

<script>
import Vue from "vue";
import UserFormLayout from "../components/layouts/UserFormLayout.vue";
import UserListTable from "../components/tables/usersList/UserListTable.vue";
import { MdButton } from 'vue-material/dist/components'

Vue.use(MdButton);

export default {
	name: 'Index',
  components: {
    UserFormLayout,
    UserListTable,
  }
}
</script>
