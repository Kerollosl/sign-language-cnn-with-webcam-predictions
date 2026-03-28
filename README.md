# Sign Language CNN with Webcam Predictions 🤟

## Kerollos Lowandy

**Repository:** [sign-language-cnn-with-webcam-predictions](https://github.com/Kerollosl/sign-language-cnn-with-webcam-predictions)

## 📋 Overview

A Convolutional Neural Network (CNN) that recognizes American Sign Language (ASL) letters in real-time using webcam input. The project includes both a Python-based model and an HTML/JavaScript web interface for browser-based predictions.

## 🎯 Features

- **Real-time Recognition:** Live webcam ASL letter detection
- **Web Interface:** Browser-based HTML implementation
- **Python Backend:** TensorFlow/Keras CNN model
- **26 Classes:** Recognizes A-Z ASL alphabet signs
- **Model Conversion:** Python model to TensorFlow.js for web deployment

## 🧠 Model Architecture

- **Type:** Convolutional Neural Network (CNN)
- **Framework:** TensorFlow/Keras
- **Input:** Webcam images (grayscale or RGB)
- **Output:** 26 classes (A-Z letters)
- **Deployment:** Python and TensorFlow.js

## 📊 Dataset

- **Classes:** 26 ASL alphabet letters
- **Training:** Categorical classification
- **Augmentation:** Real-time data augmentation for robustness

## 🚀 Quick Start

### Prerequisites

**For Python:**
```bash
pip install tensorflow opencv-python numpy
```

**For Web Interface:**
- Modern web browser with webcam support
- No installation required

### Running Python Version
```bash
python categorical_classification_sign_language.py
```

### Running Web Interface
```bash
# Open in browser
open "Sign Language HTML/index.html"
```

## 📁 Repository Contents

### Python Scripts
- `categorical_classification_sign_language.py` - Main CNN training and prediction script
- `functions.py` - Utility functions for data processing and model operations
- `convert_to_json.py` - Convert trained model to TensorFlow.js format

### Web Interface
- `Sign Language HTML/` - Complete web-based implementation
  - HTML interface for webcam capture
  - TensorFlow.js model integration
  - Real-time prediction display

### Documentation
- `ReadMe.txt` - Original project documentation

## 🛠️ Technical Stack

- **Deep Learning:** TensorFlow, Keras
- **Computer Vision:** OpenCV
- **Web Deployment:** TensorFlow.js
- **Data Processing:** NumPy
- **Web Technologies:** HTML5, JavaScript, WebRTC

## 📝 Usage Examples

### Python Prediction
```python
# Train and predict with Python
from categorical_classification_sign_language import train_model, predict_sign

# Train model
model = train_model()

# Predict from webcam
predict_sign(model)
```

### Web Interface
1. Open `Sign Language HTML/index.html` in browser
2. Allow webcam permissions
3. Show ASL letter sign to camera
4. View real-time predictions

### Convert Model for Web
```python
# Convert Python model to TensorFlow.js
python convert_to_json.py
```

## 🎓 Applications

- ASL learning and education
- Accessibility tools for deaf/hard-of-hearing
- Sign language practice and feedback
- Educational demonstrations
- Real-time communication assistance

## 🔧 Model Training

Key features:
- **Data Augmentation:** Rotation, zoom, shift for robustness
- **Categorical Classification:** Softmax output for 26 classes
- **Real-time Processing:** Optimized for webcam frame rates
- **Transfer Learning:** Option to use pre-trained CNN base

## 📈 Performance

The model achieves:
- High accuracy on standard ASL alphabet dataset
- Real-time inference speeds
- Robust to lighting variations
- Works with various hand positions

## 🌐 Web Deployment

The HTML version includes:
- **Webcam Integration:** WebRTC for camera access
- **TensorFlow.js:** Client-side model inference
- **Responsive UI:** Works on desktop and mobile
- **No Server Required:** Fully client-side processing

## 👤 Author

**Kerollos Lowandy**
- GitHub: [@Kerollosl](https://github.com/Kerollosl)
- Email: klowandy@gmail.com

## 📄 License

This project is available for educational and research purposes.

---

**Last Updated:** March 27, 2026
