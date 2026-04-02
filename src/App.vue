<script setup>
import { onMounted } from 'vue';
import { driver } from "driver.js";

const startTour = () => {
  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: '#tour-header',
        popover: {
          title: 'Welcome to our App!',
          description: '<div style="display: flex; align-items: start; gap: 12px; margin-top: 12px;"><img src="/robot_guide.png" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover; background: rgba(255,255,255,0.1);" /><span>This is the header section. Here you can find navigation links and user profile settings.</span></div>',
          side: "bottom",
          align: 'start'
        }
      },
      {
        element: '#tour-sidebar',
        popover: {
          title: 'Your Toolkit',
          description: '<div style="display: flex; align-items: start; gap: 12px; margin-top: 12px;"><img src="/robot_guide.png" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover; background: rgba(255,255,255,0.1);" /><span>Access all your powerful tools and features from this left sidebar.</span></div>',
          side: "right",
          align: 'start'
        }
      },
      {
        element: '#tour-main',
        popover: {
          title: 'Main Dashboard',
          description: '<div style="display: flex; align-items: start; gap: 12px; margin-top: 12px;"><img src="/robot_guide.png" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover; background: rgba(255,255,255,0.1);" /><span>Here is where the magic happens! View your stats, analytics, and primary content.</span></div>',
          side: "left",
          align: 'start'
        }
      },
      {
        element: '#tour-action',
        popover: {
          title: 'Take Action',
          description: '<div style="display: flex; align-items: start; gap: 12px; margin-top: 12px;"><img src="/robot_guide.png" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover; background: rgba(255,255,255,0.1);" /><span>Whenever you are ready, interact with main actions here to get started!</span></div>',
          side: "top",
          align: 'start'
        }
      }
    ]
  });

  driverObj.drive();
};

onMounted(() => {
  setTimeout(() => {
    startTour();
  }, 2000);
});

</script>

<template>
  <div class="layout-container">
    <header id="tour-header" class="glass-panel header">
      <div class="logo">🚀 NexusApp</div>
      <nav class="nav-links">
        <a href="#">Home</a>
        <a href="#">Dashboard</a>
        <a href="#">Settings</a>
      </nav>
      <button class="btn" @click="startTour">Start Product Tour</button>
    </header>

    <div class="main-layout">
      <aside id="tour-sidebar" class="glass-panel sidebar">
        <ul class="nav-menu">
          <li class="active">📊 Analytics</li>
          <li>👥 Users</li>
          <li>⚙️ Configuration</li>
          <li>🛡️ Security</li>
          <li>💬 Messages</li>
        </ul>
      </aside>

      <main class="content-area">
        <div id="tour-main" class="glass-panel dashboard-widget">
          <h1>Welcome Back, Explorer</h1>
          <p>Your systems are running smoothly. The orbital command center is operational.</p>
          <div class="stats-grid">
            <div class="stat-card">
              <h3>Total Views</h3>
              <p class="value">1.2M</p>
            </div>
            <div class="stat-card">
              <h3>Engagement</h3>
              <p class="value">84%</p>
            </div>
            <div class="stat-card">
              <h3>Growth</h3>
              <p class="value">+22%</p>
            </div>
          </div>
        </div>
        
        <div class="actions-area">
          <button id="tour-action" class="btn primary-action">Deploy New System</button>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem;
  gap: 2rem;
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #60a5fa, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: white;
}

.main-layout {
  display: flex;
  flex: 1;
  gap: 2rem;
}

.sidebar {
  width: 250px;
  padding: 1.5rem;
}

.nav-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-menu li {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: #cbd5e1;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-menu li:hover, .nav-menu li.active {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.dashboard-widget {
  padding: 3rem;
  flex: 1;
}

.dashboard-widget h1 {
  margin-top: 0;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.dashboard-widget p {
  color: #94a3b8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.03);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.2s;
}

.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.05);
}

.stat-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-card .value {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: white;
}

.actions-area {
  display: flex;
  justify-content: flex-end;
}

.primary-action {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
}

.primary-action:hover {
  box-shadow: 0 10px 20px -5px rgba(139, 92, 246, 0.4);
}

/* Make sure it's responsive */
@media (max-width: 768px) {
  .main-layout {
    flex-direction: column;
  }
  
  .sidebar {
    width: auto;
  }
}
</style>
