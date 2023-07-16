const mapping: Record<string, string> = {
  colleges: 'college',
  'staff-members': 'staff_member',
  students: 'student',
  teachers: 'teacher',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
