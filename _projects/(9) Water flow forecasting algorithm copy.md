---
name: Water flow forecasting algorithm
tools: [external project, team, machine learning, python]
image: /assets/imgs/water_forecasting_algorithm/miniature/miniature.png
description: Application of machine learning to industrial processes. The project has been conducted for the Industrial Ai Challenge. Our team won the competition

---

<center><iframe width="400" height="300" src="/assets/imgs/water_forecasting_algorithm/prediction_animation.mp4" frameborder="0" allowfullscreen></iframe></center>
![project_idea](/assets/imgs/water_forecasting_algorithm/1.png)

# Overview
This project consisted on developing a forecasting algorithm for a company operating in the field of water treatment plant control. It has been developed for the Industrial AI challenge competition and the objective of this project was to design and implement a model that accurately predicts the incoming water volume at the plant's intake. This forecast is crucial for optimizing a specific step in the water cleaning process that involves the activation of bacteria through air pumps. By knowing the expected water volume and its composition, the cycles of the air pumps can be optimized for efficient and effective water treatment.

# Description
- Algorithm Development: the project involved the development and evaluation of various algorithms to identify the most suitable approach for data series about water volume forecasting. Several algorithms were tested, including XGBoost, Temporal Convolutional Network (TCN), Long Short-Term Memory (LSTM). Each algorithm was trained on historical data and evaluated.

- Feature Selection and Preprocessing: To train the forecasting algorithms effectively, relevant features were selected and preprocessed. Factors such as historical water flow rates, weather data, seasonal patterns, and any other variables deemed significant were considered. Feature engineering techniques were applied to capture the temporal and spatial characteristics of the data, ensuring that the algorithms could extract meaningful patterns for accurate predictions. 

- Algorithm Evaluation and Comparison: After training and fine-tuning the selected algorithms, an extensive evaluation was conducted to compare their performance. Various metrics were used to assess the algorithms' forecasting accuracy.

# Results
Through the project, the following findings and results were obtained:

- Explored and evaluated various algorithms, including XGBoost, Temporal Convolutional Network (TCN), LSTM

- XGBoost algorithm demonstrated excellent forecasting accuracy, providing reliable predictions for water volume at the plant's intake. It was selected as deliverable model

- Temporal Convolutional Network (TCN) showed promising performance, capturing long-term dependencies and achieving competitive forecasting results.

- LSTM models exhibited strong capabilities in capturing temporal dynamics and performed well in predicting water volume.

- Developed forecasting models that accurately predicts incoming water volume, contributing to an effcient management of the water treatment process.

- Comparative analysis enabled identification of the most suitable algorithm for the company's needs.

- The project provided the company with valuable insights and tools and offered a collaboration to further develop the project.


<div class="flex-parent jc-center">
{% include elements/button.html link="/technical_details/Industrial-AI-Challenge-2021-Final-report-NIRIS.pdf" text="Technical report" %}
</div>