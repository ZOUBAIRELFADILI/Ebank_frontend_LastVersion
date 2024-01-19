
aq
export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "admin", component: AdminTemplateComponent, canActivate: [authenticationGuard], children: [
      { path: "customers", component: CustomersComponent },
      { path: "accounts", component: AccountsComponent },
      { path: "new-customer", component: NewCustomerComponent, canActivate: [authorizationGuard], data: { roles: "ADMIN" } },
      { path: "customer-accounts/:id", component: CustomerAccountsComponent, },
      { path: "edit-customer/:id", component: EditCustomerComponent, canActivate: [authorizationGuard], data: { roles: "ADMIN" } },
      { path: "notAuthorized", component: NotAuthorizedComponent },
      { path: "new-account", component: NewAccountComponent },
      { path: "bank-accounts", component:BankAccountComponent },

      ]
  },

];
