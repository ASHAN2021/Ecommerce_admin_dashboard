import React, { useEffect, useState } from 'react';
import { Box, H2, H5, Text } from '@adminjs/design-system';
import { useCurrentAdmin } from 'adminjs';              // ← import this

const Dashboard = ({ data = {} }) => {
  const [currentAdmin] = useCurrentAdmin();             // ← get current admin from hook
  const isAdmin = currentAdmin?.role === 'admin';       // ← check role

  const [stats, setStats] = useState({
    totalUsers: data.totalUsers ?? 0,
    totalOrders: data.totalOrders ?? 0,
    totalProducts: data.totalProducts ?? 0,
  });

  useEffect(() => {
    const hasServerData =
      data.totalUsers !== undefined ||
      data.totalOrders !== undefined ||
      data.totalProducts !== undefined;

    if (hasServerData) {
      setStats({
        totalUsers: data.totalUsers ?? 0,
        totalOrders: data.totalOrders ?? 0,
        totalProducts: data.totalProducts ?? 0,
      });
      return;
    }

    fetch('/admin/api/dashboard', { credentials: 'include' })
      .then((response) => response.json())
      .then((dashboardData) => {
        setStats({
          totalUsers: dashboardData.totalUsers ?? 0,
          totalOrders: dashboardData.totalOrders ?? 0,
          totalProducts: dashboardData.totalProducts ?? 0,
        });
      })
      .catch(() => {
        setStats({ totalUsers: 0, totalOrders: 0, totalProducts: 0 });
      });
  }, [data]);

  const cards = [
    ...(isAdmin ? [{ label: 'Total Users', value: stats.totalUsers }] : []),
    { label: 'Total Orders',   value: stats.totalOrders },
    { label: 'Total Products', value: stats.totalProducts },
  ];

  return (
    <Box variant="grey" padding="xl">
      <H2>Dashboard Statistics</H2>
      <Box display="flex" flexDirection="row" mt="xl">
        {cards.map(({ label, value }) => (
          <Box key={label} bg="white" p="xl" mr="lg" borderRadius="lg" minWidth="200px">
            <H5>{label}</H5>
            <Text fontSize="xl" fontWeight="bold">{value}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;