export default function ({ store, route, redirect }) {
  console.log(store.getters['auth/user'], "getters user")
  if (store.getters['auth/user'] && store.getters['auth/user'].type_user === 3)
    redirect('/bus-manager/dashboard')

  if (store.getters['auth/user'] && store.getters['auth/user'].type_user === 2)
    redirect('/admin/dashboard')
  if (store.getters['auth/user'] && store.getters['auth/user'].type_user === 1)
    redirect('/admin/dashboard')
    if (store.getters['auth/user'] && store.getters['auth/user'].type_user === 4)
    redirect('/')
}
