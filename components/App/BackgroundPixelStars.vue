<template>
  <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <div class="absolute inset-0 bg-pixel-grid"></div>
    <div class="absolute inset-0 bg-pixel-glow"></div>
    <div class="absolute inset-0">
      <span
        v-for="star in stars"
        :key="star.id"
        class="pixel-star"
        :style="{
          left: `${star.x}%`,
          top: `${star.y}%`,
          width: `${star.size}px`,
          height: `${star.size}px`,
          backgroundColor: star.color,
          animationDelay: `${star.delay}s`,
          animationDuration: `${star.duration}s`,
        }"
      ></span>
    </div>
  </div>
</template>

<script setup>
const stars = [
  { id: 1, x: 5, y: 18, size: 5, color: "#a855f7", delay: 0, duration: 5.8 },
  { id: 2, x: 13, y: 82, size: 6, color: "#f87171", delay: 1.2, duration: 6.2 },
  { id: 3, x: 22, y: 9, size: 4, color: "#818cf8", delay: 0.4, duration: 5.4 },
  { id: 4, x: 28, y: 46, size: 5, color: "#14b8a6", delay: 2.1, duration: 6.8 },
  { id: 5, x: 39, y: 62, size: 4, color: "#facc15", delay: 0.8, duration: 5.6 },
  { id: 6, x: 46, y: 22, size: 6, color: "#a3e635", delay: 1.6, duration: 7.2 },
  { id: 7, x: 52, y: 88, size: 5, color: "#c084fc", delay: 0.2, duration: 5.9 },
  { id: 8, x: 61, y: 38, size: 4, color: "#94a3b8", delay: 2.4, duration: 6.4 },
  { id: 9, x: 69, y: 73, size: 6, color: "#22c55e", delay: 1.1, duration: 6.7 },
  { id: 10, x: 77, y: 14, size: 4, color: "#60a5fa", delay: 1.9, duration: 5.7 },
  { id: 11, x: 88, y: 31, size: 5, color: "#f472b6", delay: 0.7, duration: 6.1 },
  { id: 12, x: 94, y: 67, size: 6, color: "#5eead4", delay: 2.8, duration: 7 },
  { id: 13, x: 7, y: 59, size: 4, color: "#fbbf24", delay: 3.1, duration: 6.5 },
  { id: 14, x: 34, y: 78, size: 5, color: "#93c5fd", delay: 2.6, duration: 5.5 },
  { id: 15, x: 57, y: 6, size: 4, color: "#fb7185", delay: 3.4, duration: 6 },
  { id: 16, x: 83, y: 91, size: 5, color: "#c4b5fd", delay: 1.4, duration: 6.9 },
  { id: 17, x: 96, y: 17, size: 4, color: "#e5e7eb", delay: 2.2, duration: 5.3 },
  { id: 18, x: 18, y: 34, size: 4, color: "#86efac", delay: 3.8, duration: 6.3 },
];
</script>

<style scoped>
.bg-pixel-grid {
  opacity: 0.72;
  background-image:
    linear-gradient(rgba(17, 24, 39, 0.09) 1px, transparent 1px),
    linear-gradient(90deg, rgba(17, 24, 39, 0.09) 1px, transparent 1px);
  background-position: -1px -1px;
  background-size: 14px 14px;
  transition:
    opacity 300ms ease,
    background-image 300ms ease;
}

.dark .bg-pixel-grid {
  opacity: 0.58;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
}

.bg-pixel-glow {
  opacity: 0.5;
  background-image:
    radial-gradient(circle at 18% 22%, rgba(20, 184, 166, 0.12), transparent 24%),
    radial-gradient(circle at 82% 72%, rgba(168, 85, 247, 0.1), transparent 26%);
  transition: opacity 300ms ease;
}

.dark .bg-pixel-glow {
  opacity: 0.36;
}

.pixel-star {
  position: absolute;
  display: block;
  border-radius: 1px;
  box-shadow: 0 0 12px currentColor;
  opacity: 0.55;
  transform: translate3d(0, 0, 0);
  animation: pixel-twinkle 6s ease-in-out infinite;
  transition: opacity 300ms ease;
}

.dark .pixel-star {
  opacity: 0.68;
}

@keyframes pixel-twinkle {
  0% {
    opacity: 0.28;
    transform: translate3d(0, 0, 0) scale(0.9);
  }

  50% {
    opacity: 0.85;
    transform: translate3d(0, -6px, 0) scale(1);
  }

  100% {
    opacity: 0.28;
    transform: translate3d(0, 0, 0) scale(0.9);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pixel-star {
    animation: none;
  }
}
</style>
