import { httpGet } from '../utils/http';
import dayjs from 'dayjs';

export function getInvitationPerMonth(year) {
  const { data, isLoading, error } = httpGet(
    '/invitations/total-per-month?year=' + year
  );
  return {
    totalPerMonth: data?.data || [],
    error,
    isLoading,
  };
}

export function getInvitations({ page, name, startDate, endDate }) {
  const { data, isLoading, error } = httpGet(
    `/invitations?page=${page}&name=${name}&start_date=${startDate}&end_date=${endDate}`
  );
  const invitations =
    data?.data?.map(v => {
      return {
        key: v?.id || '-',
        slug: v?.slug || '-',
        bride: v?.bride || '-',
        groom: v?.groom || '-',
        theme: v?.theme || '-',
        song: v?.song || '-',
        ceremony: dayjs(v?.ceremony).format('YYYY MMMM D H:m') || '-',
        reception: dayjs(v?.reception).format('YYYY MMMM D H:m') || '-',
        created: dayjs(v?.created_at).format('YYYY MMMM D H:m') || '-',
      };
    }) || [];
  const pagination = data?.pagination;
  return {
    invitations,
    total: pagination?.total || 0,
    error,
    isLoading,
  };
}
