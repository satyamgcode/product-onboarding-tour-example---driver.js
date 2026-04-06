<script setup>
import { onMounted } from "vue";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const createTourContent = (title, description) => `
  <div class="tour-popup-wrapper">
    <div class="tour-robot">
      <img src="/aihr.png" alt="Robot Guide" />
    </div>

    <div class="tour-message-box">
      <h3>${title}</h3>
      <p>${description}</p>
    </div>
  </div>
`;

const startTour = () => {
  const driverObj = driver({
    showProgress: true,
    animate: true,
    smoothScroll: true,
    allowClose: true,
    popoverClass: "custom-tour-popover",
    nextBtnText: "Next →",
    prevBtnText: "← Back",
    doneBtnText: "Finish",

    steps: [
      {
        element: "#tour-header",
        popover: {
          title: "",
          description: createTourContent(
            "Navigation & Settings",
            "This header area provides links for navigating back to Home, accessing the Dashboard, and adjusting your Settings."
          ),
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "#tour-sidebar",
        popover: {
          title: "",
          description: createTourContent(
            "Navigation Sidebar",
            "All tools, user management, and system controls are available here."
          ),
          side: "right",
          align: "start",
        },
      },
      {
        element: "#tour-main",
        popover: {
          title: "",
          description: createTourContent(
            "Dashboard Insights",
            "Track all important metrics, performance reports and growth trends here."
          ),
          side: "left",
          align: "start",
        },
      },
      {
        element: "#tour-action",
        popover: {
          title: "",
          description: createTourContent(
            "Quick Action",
            "Click here to instantly deploy and manage new systems."
          ),
          side: "top",
          align: "center",
        },
      },
    ],
  });

  driverObj.drive();
};

onMounted(() => {
  setTimeout(() => {
    startTour();
  }, 1000);
});
</script>

<template>
  <div class="min-h-screen bg-white p-8 flex flex-col gap-8">
    <!-- HEADER -->
    <header
      id="tour-header"
      class="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-8 py-4 shadow-sm"
    >
      <div class="text-2xl font-bold">🚀 NexusApp</div>

      <nav class="flex gap-6">
        <a href="#" class="font-medium text-gray-600 hover:text-[#8A3EEA]">
          Home
        </a>
        <a href="#" class="font-medium text-gray-600 hover:text-[#8A3EEA]">
          Dashboard
        </a>
        <a href="#" class="font-medium text-gray-600 hover:text-[#8A3EEA]">
          Settings
        </a>
      </nav>

      <button
        @click="startTour"
        class="rounded-lg bg-[#8A3EEA] px-4 py-2 text-white"
      >
        Start Product Tour
      </button>
    </header>

    <div class="flex gap-8">
      <!-- SIDEBAR -->
      <aside
        id="tour-sidebar"
        class="w-60 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <ul class="flex flex-col gap-3">
          <li class="rounded-lg bg-gray-100 p-3">📊 Analytics</li>
          <li class="rounded-lg p-3">👥 Users</li>
          <li class="rounded-lg p-3">⚙️ Configuration</li>
          <li class="rounded-lg p-3">🛡️ Security</li>
        </ul>
      </aside>

      <!-- MAIN -->
      <main class="flex-1 flex flex-col gap-8">
        <div
          id="tour-main"
          class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <h1 class="text-3xl font-bold">Welcome Back</h1>
          <p class="mt-2 text-gray-600">
            Your systems are running smoothly.
          </p>
        </div>

        <div class="flex justify-end">
          <button
            id="tour-action"
            class="rounded-lg bg-gradient-to-r from-[#F3901B] to-[#8A3EEA] px-5 py-3 text-white"
          >
            Deploy New System
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.custom-tour-popover {
  background: transparent !important;
  box-shadow: none !important;
  padding: 0 !important;
  border: none !important;
  min-width: 420px !important;
}

.driver-popover {
  background: transparent !important;
  box-shadow: none !important;
}

.driver-popover-title {
  display: none !important;
}

.driver-popover-description {
  margin: 0 !important;
  padding: 0 !important;
}

.tour-popup-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
}

.tour-robot {
  width: 100px;
  height: 100px;
  flex-shrink: 0;
}

.tour-robot img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.tour-message-box {
  background: white;
  border-radius: 16px;
  padding: 18px;
  width: 320px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.tour-message-box h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 700;
  color: #374151;
}

.tour-message-box p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #6b7280;
}

/* Buttons */
.driver-popover-footer {
  margin-top: 12px !important;
}

.driver-popover-next-btn {
  background: #8a3eea !important;
  color: white !important;
  border-radius: 10px !important;
  border: none !important;
  text-shadow: none !important;
}

.driver-popover-prev-btn {
  background: #f3f4f6 !important;
  color: #374151 !important;
  border-radius: 10px !important;
  border: none !important;
  text-shadow: none !important;
}
</style>