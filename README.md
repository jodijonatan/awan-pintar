# ☁️ Awan Pintar

Awan Pintar is a modern, responsive weather application built with **Next.js** and **Tailwind CSS**, powered by the **OpenWeatherMap API**. This project delivers real-time weather information with a clean, intuitive UI, fast performance, and mobile-friendly design, making it ideal for users to quickly check weather conditions anywhere.

## 🌍 About The Project

Awan Pintar (Smart Cloud) is designed to provide users with accurate, up-to-date weather data including temperature, humidity, wind speed, and weather descriptions. The app features a simple search functionality to query weather by city, a suggestion form for user feedback, and smooth animations for an enhanced user experience. It's perfect for learning projects, personal portfolios, or as a foundation for more advanced weather-related applications.

## ✨ Features

- 🌤️ **Real-Time Weather Data**: Fetches live weather information from OpenWeatherMap API.
- 🔍 **City Search**: Easily search and display weather for any city worldwide.
- 📱 **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- ⚡ **Fast Performance**: Built with Next.js for server-side rendering and optimal loading speeds.
- 🎨 **Modern UI**: Styled with Tailwind CSS, featuring gradients, animations, and a clean aesthetic.
- 📝 **User Feedback Form**: Integrated suggestion form using Formspree for collecting user input.
- 🌐 **API Integration**: Seamlessly connects to external weather APIs for reliable data.

## 🛠 Tech Stack

- **Framework:** Next.js 15.4.6
- **Frontend Library:** React 19.1.0
- **Styling:** Tailwind CSS v4
- **Animations:** AOS (Animate On Scroll)
- **Icons:** Lucide React
- **Language:** JavaScript (ES6+)
- **API:** OpenWeatherMap API
- **Form Handling:** Formspree
- **Build Tool:** Turbopack (via Next.js)
- **Deployment:** Vercel (recommended)

## 🚀 Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- A free API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jodijonatan/awan-pintar.git
   cd awan-pintar
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env.local` file in the root directory.
   - Add your OpenWeatherMap API key:
     ```
     NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
     ```
   - Obtain your API key from [OpenWeatherMap](https://openweathermap.org/api) by signing up for a free account.

4. **Run the development server**

   ```bash
   npm run dev
   ```

   - Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build for Production

To build the app for production:

```bash
npm run build
npm start
```

## 📖 Usage

- **Home Page**: View the landing page with an overview of the app's features.
- **Weather Page**: Search for a city to get real-time weather data, including temperature, humidity, wind speed, and weather icons.
- **Suggestion Form**: Provide feedback or suggestions directly through the integrated form.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/).
- Icons from [Lucide React](https://lucide.dev/).
- Animations powered by [AOS](https://michalsnik.github.io/aos/).
- Form handling via [Formspree](https://formspree.io/).

## 📞 Contact

**Jodi Jonatan**

- GitHub: [jodijonatan](https://github.com/jodijonatan)
- Email: jodijonatann@gmail.com

---

_Built with ❤️ using Next.js and Tailwind CSS._
