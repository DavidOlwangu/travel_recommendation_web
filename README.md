# Travel Recommendation Web App

A simple front-end web application that allows users to search for travel destinations and instantly view matching city results (with images and descriptions) loaded from a local JSON file.  
Search results appear as an overlay on top of the home page without interfering with the main layout.

---

## 🚀 Features

- 🔍 Live city search
- 🖼️ Displays destination images and descriptions from a local JSON file
- 🧭 Results appear as a floating overlay (on top of the home section)
- 🧹 Clear search input button
- 📩 Contact form with client-side handling and success message
- 🕒 Displays current time in Nairobi (console output)

---

## 🗂️ Project Structure
.
├── index.html
├── style.css
├── script.js
├── travel_api.json
└── images/
├── Sydney.jfif
├── Melbourne.jfif
├── TokyoJapan.jfif
├── KyotoJapan.jfif
├── RioDeJaneiro.jfif
├── SaoPauloBrazil.jfif
├── BoraBora.jfif
├── Copacabanabeach.jfif
├── TajMahalIndia.jfif
└── Cambordia.jfif

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- JSON (local data source)

---

## 📦 How to Run the Project

Because the project uses `fetch()` to load a local JSON file, it must be run through a local web server.

### Using VS Code (Recommended)

1. Install the **Live Server** extension.
2. Open the project folder in VS Code.
3. Right-click `index.html` → **Open with Live Server**.

Your app should open in a browser using a URL similar to:

http://127.0.0.1:5500/index.html


---

## 📄 Data Source

The application reads its data from:

travel_api.json

The structure includes:

- countries
  - cities
- temples
- beaches

Each entry contains:

- name
- imageUrl
- description

---

## 🧪 Main Functionality

- Typing in the search input filters and displays matching cities.
- Results are rendered dynamically from the JSON file.
- Images are loaded using relative paths defined in the JSON file.
- Clicking **Clear** removes the search text and clears the results panel.

---

## ⚠️ Important Notes

- The project will not load JSON correctly if opened directly using:

file:///

- Always use a local server (for example, Live Server).

---

## 📜 License

This project is licensed under the **Apache License, Version 2.0**.

You may obtain a copy of the License at:


http://www.apache.org/licenses/LICENSE-2.0


Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an **"AS IS" BASIS**,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

---

**DAVID OLWANGU**  
Software Development Student
olwangu97@gmail.com
0746 963 838
