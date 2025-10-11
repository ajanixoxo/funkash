// ==================== ANALYTICS PAGE ====================
const AnalyticsPage: React.FC = () => {
  const stats = [
    { label: 'Total Visitors', value: '24,531', change: '+12.5%', trend: 'up' },
    { label: 'Page Views', value: '89,247', change: '+8.2%', trend: 'up' },
    { label: 'Bounce Rate', value: '32.4%', change: '-5.1%', trend: 'down' },
    { label: 'Avg. Session', value: '4m 23s', change: '+2.3%', trend: 'up' }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
              <span className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Traffic Overview</h3>
          <div className="h-64 flex items-center justify-center text-gray-400">
            <p>[Chart Component Here]</p>
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Top Pages</h3>
          <div className="space-y-4">
            {[
              { page: '/projects', views: '12,345', percentage: 45 },
              { page: '/about', views: '8,234', percentage: 30 },
              { page: '/essays', views: '5,678', percentage: 20 },
              { page: '/leadership', views: '3,456', percentage: 12 }
            ].map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.page}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{item.views}</span>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnalyticsPage;