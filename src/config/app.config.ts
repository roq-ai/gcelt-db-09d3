interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Student', 'Teacher', 'Administrator', 'Staff Member'],
  tenantName: 'College',
  applicationName: 'GCELT/DB',
  addOns: ['file', 'notifications'],
};
