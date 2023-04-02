import type { MockMethod } from "vite-plugin-mock"
const auth: Array<MockMethod> = [
  // 获取验证码
  {
    url: "/api/v1/account/captcha",
    method: "get",
    response: () => {
      return {
        code: 1000,
        data: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0,0,120,40"><rect width="100%" height="100%" fill="#d8e3e7"/><path fill="#568493" d="M24.96 25.97L24.92 25.92L24.95 25.96Q24.81 24.72 22.87 23.99L22.87 23.99L22.90 24.02Q22.33 23.75 21.79 23.75L21.73 23.69L21.87 23.83Q20.48 23.81 19.41 24.38L19.33 24.30L19.31 24.27Q18.06 25.12 18.17 26.33L18.06 26.22L18.05 26.21Q18.38 29.02 18.23 31.27L18.25 31.29L18.38 31.42Q18.15 33.77 17.43 36.29L17.38 36.24L17.53 36.39Q15.40 36.88 14.22 37.30L14.15 37.24L14.02 37.11Q15.66 33.53 15.66 29.54L15.64 29.51L15.64 29.52Q15.63 24.06 13.04 19.61L13.13 19.69L13.07 19.63Q14.31 20.15 16.71 20.88L16.79 20.96L16.82 20.99Q17.11 21.69 17.49 23.22L17.45 23.18L17.46 23.19Q18.84 21.14 22.72 21.21L22.75 21.24L22.68 21.17Q24.10 21.15 24.90 21.26L25.00 21.36L24.85 21.21Q27.90 21.68 27.98 23.69L28.04 23.75L27.92 23.63Q28.00 24.59 27.81 25.62L27.75 25.56L27.76 25.57Q27.36 28.14 27.55 31.15L27.49 31.08L27.56 31.16Q27.72 34.02 28.71 36.57L28.75 36.61L28.71 36.57Q26.91 36.06 25.19 35.91L25.26 35.98L25.30 36.01Q24.82 33.63 24.74 30.96L24.80 31.03L24.71 30.93Q24.72 28.28 24.95 25.96ZM24.94 36.38L24.88 36.32L24.88 36.32Q25.63 36.26 26.92 36.49L26.90 36.47L27.27 37.53L27.41 37.66Q27.62 38.19 27.85 38.72L27.78 38.65L27.77 38.64Q30.13 39.13 32.83 40.31L32.78 40.26L32.76 40.24Q30.36 37.08 29.68 33.27L29.78 33.37L29.82 33.42Q29.34 31.15 29.45 27.45L29.42 27.42L29.48 27.48Q29.45 27.15 29.49 26.35L29.64 26.49L29.48 26.34Q29.66 25.83 29.58 25.34L29.48 25.23L29.51 25.27Q29.49 23.68 28.39 23.19L28.28 23.08L28.40 23.20Q28.20 22.32 27.44 21.71L27.35 21.62L27.43 21.70Q25.61 20.56 22.56 20.64L22.70 20.77L22.58 20.65Q20.86 20.83 20.02 21.02L19.88 20.89L19.91 20.92Q18.54 21.33 17.59 22.25L17.56 22.22L17.59 22.25Q17.44 21.68 17.05 20.65L17.09 20.68L16.98 20.57Q14.28 20.01 12.45 19.02L12.38 18.94L12.46 19.02Q15.46 23.85 15.46 29.60L15.51 29.65L15.47 29.61Q15.55 34.07 13.64 37.91L13.55 37.82L13.62 37.88Q14.24 37.52 15.54 37.14L15.57 37.17L15.50 37.10Q14.97 38.32 14.43 39.31L14.48 39.35L14.50 39.37Q15.84 38.85 19.38 38.28L19.38 38.28L19.44 38.34Q20.40 33.17 20.28 28.33L20.40 28.45L20.42 28.47Q20.36 27.61 21.54 26.88L21.45 26.79L21.43 26.78Q22.44 26.11 23.55 26.00L23.64 26.09L23.61 26.06Q24.03 25.99 24.45 26.18L24.52 26.25L24.44 26.17Q24.29 28.72 24.33 31.27L24.45 31.40L24.44 31.39Q24.47 33.89 24.97 36.40Z"/><path d="M15 33 C80 1,49 20,101 11" stroke="#6de88c" fill="none"/><path fill="#6a43df" d="M54.99 18.12L54.87 18.00L54.86 17.99Q53.17 20.83 50.51 26.47L50.49 26.45L48.43 30.63L48.46 30.66Q47.51 32.49 46.18 34.74L46.20 34.76L46.28 34.84Q46.71 34.81 45.03 34.85L45.02 34.83L45.00 34.82Q44.97 34.79 43.72 34.79L43.79 34.86L43.84 34.91Q42.99 33.30 40.06 26.14L40.07 26.16L40.09 26.18Q37.92 20.81 35.83 17.80L35.89 17.86L35.90 17.87Q36.59 20.88 36.59 24.04L36.69 24.15L36.62 24.08Q36.65 30.62 33.68 36.18L33.61 36.11L33.64 36.13Q32.40 36.57 30.04 37.29L29.90 37.15L30.03 37.28Q33.71 31.60 33.71 24.36L33.55 24.21L33.62 24.27Q33.62 15.33 28.22 8.36L28.15 8.30L28.19 8.34Q29.82 9.06 32.19 9.74L32.29 9.85L32.28 9.84Q39.32 16.57 45.41 29.90L45.35 29.83L45.41 29.90Q48.86 22.84 51.07 19.34L50.99 19.26L50.99 19.26Q54.66 13.56 58.62 10.10L58.71 10.19L58.62 10.11Q59.90 9.90 62.26 9.14L62.31 9.19L62.26 9.13Q57.24 15.72 57.24 24.33L57.15 24.24L57.33 24.42Q57.29 31.04 60.71 36.56L60.75 36.60L60.70 36.54Q59.35 36.22 56.60 35.61L56.62 35.63L56.68 35.68Q54.15 30.72 54.15 24.74L54.21 24.80L54.16 24.75Q54.29 21.46 54.98 18.11ZM56.36 35.94L56.32 35.89L56.49 36.06Q57.15 36.16 58.60 36.42L58.57 36.39L58.63 36.45Q58.97 37.10 59.92 38.58L59.95 38.62L60.02 38.68Q62.14 39.09 65.60 40.30L65.57 40.28L65.47 40.17Q59.32 33.94 59.32 24.12L59.36 24.17L59.18 23.98Q59.27 16.35 63.65 10.22L63.64 10.21L61.54 11.01L61.46 10.92Q62.42 9.33 63.06 8.45L63.03 8.42L63.08 8.47Q61.18 9.08 58.55 9.61L58.61 9.67L58.65 9.71Q51.93 15.86 45.88 28.46L45.85 28.44L45.77 28.36Q40.69 17.49 35.75 12.24L35.71 12.20L35.60 12.10Q35.38 12.17 34.81 12.06L34.68 11.93L33.57 10.75L33.52 10.70Q32.85 9.96 32.17 9.35L32.14 9.32L32.19 9.37Q29.14 8.37 27.35 7.65L27.39 7.68L27.42 7.72Q33.35 14.87 33.35 24.27L33.30 24.22L33.30 24.22Q33.30 31.83 29.15 37.70L29.15 37.70L29.14 37.69Q29.83 37.46 31.13 37.05L31.16 37.08L31.27 37.19Q31.19 37.49 29.78 39.59L29.68 39.49L29.71 39.51Q31.44 38.96 34.94 38.19L35.00 38.26L34.97 38.23Q38.68 31.16 38.49 23.40L38.53 23.44L38.56 23.47Q40.02 27.40 43.49 35.28L43.43 35.22L43.41 35.21Q43.83 35.32 44.06 35.32L44.01 35.28L44.42 35.16L44.49 35.22Q45.04 36.00 45.84 37.30L45.81 37.27L45.66 37.12Q47.34 37.15 47.34 37.15L47.40 37.21L47.35 37.17Q48.33 37.12 48.98 37.20L49.02 37.24L48.94 37.16Q50.53 33.15 53.88 25.16L53.98 25.26L54.01 25.29Q53.83 30.67 56.42 36.00Z"/><path d="M9 17 C64 22,50 7,114 30" stroke="#dfa061" fill="none"/><path d="M19 24 C63 14,75 38,101 26" stroke="#d3ed86" fill="none"/><path fill="#61926e" d="M91.34 24.04L91.41 24.11L91.37 24.07Q89.68 24.09 88.44 25.52L88.33 25.40L88.32 25.40Q87.17 26.91 86.98 28.82L86.89 28.73L86.98 28.82Q86.75 30.87 87.83 31.84L87.83 31.84L87.70 31.71Q88.88 32.77 90.98 32.66L90.90 32.59L91.03 32.72Q93.02 32.46 94.13 31.77L94.22 31.86L94.16 31.81Q95.38 30.79 95.38 29.22L95.29 29.13L95.22 29.06Q95.34 28.80 95.27 28.42L95.16 28.31L95.17 28.33Q95.32 26.72 94.21 25.37L94.21 25.37L94.13 25.28Q93.00 23.91 91.32 24.02ZM90.95 35.19L91.01 35.24L91.00 35.23Q86.56 35.17 85.15 34.41L85.22 34.48L85.12 34.38Q84.21 33.74 84.02 32.03L83.91 31.92L84.08 32.08Q84.04 31.40 84.08 30.67L83.92 30.52L83.98 30.57Q84.08 29.57 84.08 29.12L84.17 29.20L84.12 29.15Q84.60 26.32 84.75 25.64L84.69 25.57L84.70 25.58Q85.16 23.65 86.00 22.24L86.08 22.32L86.06 22.30Q88.65 17.84 94.59 11.49L94.65 11.55L94.71 11.61Q97.31 11.24 99.52 10.44L99.47 10.40L99.51 10.43Q92.72 17.96 89.52 22.18L89.45 22.11L89.49 22.15Q90.51 21.69 91.81 21.69L91.76 21.64L91.66 21.54Q94.99 21.56 96.52 23.51L96.51 23.50L96.52 23.51Q97.95 25.24 98.29 28.79L98.18 28.68L98.26 28.76Q98.38 29.52 98.38 30.13L98.40 30.14L98.28 30.03Q98.32 33.19 96.11 34.25L96.19 34.33L96.17 34.31Q94.78 34.75 90.89 35.13ZM93.29 37.64L93.28 37.63L93.35 37.70Q94.55 37.56 96.53 37.64L96.56 37.67L96.62 37.73Q98.24 37.79 99.80 37.07L99.67 36.94L99.72 36.98Q100.87 36.24 100.87 34.45L100.81 34.39L100.84 34.41Q100.80 33.89 100.63 32.90L100.66 32.93L100.59 32.86Q100.51 31.95 100.51 31.50L100.59 31.58L100.50 31.49Q99.59 26.73 97.99 24.83L97.98 24.82L98.13 24.97Q97.96 24.76 97.80 24.53L97.89 24.61L97.59 24.38L97.37 24.21L97.46 24.30Q97.05 23.74 96.44 22.78L96.50 22.84L96.51 22.85Q95.55 21.85 93.57 21.39L93.51 21.34L93.58 21.41Q94.90 19.91 97.87 16.22L97.69 16.04L102.05 10.88L101.99 10.82Q100.49 11.76 98.09 12.52L97.95 12.37L98.01 12.44Q99.05 11.57 100.84 9.59L100.65 9.41L100.75 9.51Q98.32 10.53 94.43 11.11L94.41 11.09L94.49 11.16Q88.70 16.98 85.73 21.93L85.78 21.98L85.77 21.98Q84.28 24.52 83.71 30.77L83.59 30.64L83.69 30.74Q83.61 31.31 83.68 32.26L83.72 32.30L83.65 32.23Q83.75 34.00 84.85 34.91L84.87 34.92L84.89 34.95Q85.16 34.99 85.12 35.03L85.20 35.11L85.11 35.02Q85.55 35.99 86.35 36.41L86.37 36.43L86.39 36.45Q87.81 37.11 89.76 37.30L89.69 37.24L89.75 37.30Q89.68 37.23 93.18 37.53ZM92.99 26.34L93.03 26.37L93.04 26.39Q93.61 26.27 94.56 26.76L94.54 26.75L94.63 26.83Q94.84 27.66 94.84 28.30L94.94 28.40L94.81 28.28Q95.01 30.15 94.06 31.14L94.16 31.23L94.14 31.22Q93.11 31.98 91.02 32.28L90.94 32.20L91.05 32.32Q89.64 32.36 89.11 32.09L89.00 31.98L88.97 31.95Q88.73 31.44 88.73 31.13L88.84 31.25L88.89 31.30Q88.68 28.04 91.61 26.75L91.56 26.70L91.62 26.75Q92.34 26.37 93.10 26.45Z"/><path fill="#645986" d="M70.84 34.87L70.76 34.79L70.85 34.88Q68.78 34.71 66.76 34.90L66.91 35.05L66.88 35.02Q67.47 29.71 67.47 24.88L67.52 24.92L67.56 24.96Q67.64 20.14 67.00 14.92L66.82 14.74L66.91 14.83Q62.23 14.35 59.04 12.67L59.00 12.64L58.35 10.95L58.42 11.03Q58.19 10.50 57.58 9.28L57.65 9.34L57.55 9.24Q62.71 12.01 68.73 12.20L68.60 12.07L68.70 12.17Q74.53 12.29 79.97 10.23L80.02 10.28L79.97 10.23Q79.33 11.72 78.68 13.55L78.69 13.56L78.68 13.54Q75.02 14.79 70.75 14.98L70.83 15.06L70.69 14.92Q70.45 19.90 70.45 24.85L70.42 24.81L70.50 24.90Q70.53 29.87 70.83 34.86ZM80.68 9.57L80.72 9.61L80.67 9.56Q74.74 11.74 68.54 11.55L68.70 11.72L68.60 11.62Q62.01 11.50 56.91 8.53L56.92 8.54L56.79 8.41Q57.61 9.76 58.91 13.04L58.81 12.94L58.92 13.05Q59.53 13.31 60.78 13.88L60.74 13.84L60.78 13.88Q61.15 14.71 61.49 16.23L61.40 16.14L61.40 16.14Q63.77 17.06 66.81 17.29L66.84 17.32L66.75 17.22Q67.21 20.99 67.21 24.76L67.04 24.60L67.14 24.70Q67.16 30.09 66.36 35.45L66.32 35.41L66.40 35.49Q67.95 35.25 68.48 35.25L68.60 35.37L68.47 35.24Q68.59 35.66 68.53 36.33L68.43 36.23L68.48 36.27Q68.45 36.97 68.45 37.31L68.35 37.22L68.46 37.32Q69.54 37.14 71.06 37.22L71.21 37.37L71.03 37.19Q72.01 37.29 73.84 37.45L73.79 37.40L73.94 37.55Q72.73 32.65 72.62 27.47L72.50 27.36L72.51 27.36Q72.35 22.02 72.88 17.11L72.85 17.08L72.95 17.18Q76.96 16.70 80.12 15.48L79.99 15.36L79.93 15.30Q80.64 12.92 81.67 10.86L81.76 10.95L81.79 10.99Q80.40 11.61 79.60 11.92L79.69 12.01L79.64 11.96Q80.06 10.67 80.63 9.52Z"/></svg>',
        message: "请求成功"
      }
    }
  },
  // 登录
  {
    url: "/api/v1/account/login",
    method: "post",
    response: () => {
      return {
        code: 1000,
        data: {
          token: "1234567890",
          userInfo: {
            id: 1,
            username: "admin",
            nickName: "超级管理员",
            avatar: "https://avatars.githubusercontent.com/u/21079031?v=4",
            roles: ["admin"]
          }
        },
        message: "请求成功"
      }
    }
  },
  // 登录
  {
    url: "/api/v1/account/current",
    method: "get",
    response: () => {
      return {
        code: 1000,
        data: {
          username: "admin",
          nickName: "超级管理员",
          avatar: "https://avatars.githubusercontent.com/u/21079031?v=4",
          roles: ["admin"]
        },
        message: "请求成功"
      }
    }
  },
  // 当前登录用户菜单
  {
    url: "/api/v1/account/getPermission",
    method: "get",
    response: () => {
      return {
        code: 1000,
        data: ["A", "B", "C", "D", "E"],
        message: "请求成功"
      }
    }
  }
]

export default auth