export default function ({ store, route, redirect }) {
  console.log(store.getters['auth/user'].is_email_verified, "getters user")
  if(!store.getters['auth/user'].is_email_verified)
    redirect('/account-verify/error')
}
