export default function ({ store, route, redirect }) {
  console.log(store.getters['auth/user'], "getters user")
  if(!store.getters['auth/user'])
    redirect('/admin/login')
}
