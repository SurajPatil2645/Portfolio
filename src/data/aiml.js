export const aimlData = {
  sectionTitle: "AI & Machine Learning",
  subtitle: "Theoretical Foundations & Practical Domain Knowledge",
  disclaimer: "Over the past several months, I have dedicated substantial time to studying the mathematical foundations, core algorithms, and deep learning architectures driving modern Artificial Intelligence. The following concepts reflect academic study and hands-on project experience.",
  
  categories: [
    {
      id: "math",
      title: "Mathematics & Statistics",
      icon: "Binary",
      description: "The fundamental mathematical building blocks behind optimization & probabilistic modeling",
      subgroups: [
        {
          name: "Linear Algebra",
          items: ["Matrices & Vectors", "Eigenvalues & Eigenvectors", "Matrix Factorization", "Vector Spaces"]
        },
        {
          name: "Calculus",
          items: ["Gradients & Partial Derivatives", "Jacobian Matrices", "Multivariate Chain Rule", "Hessian Matrices"]
        },
        {
          name: "Probability & Statistics",
          items: ["Bayes' Theorem", "Probability Distributions", "Variance & Covariance", "Correlation Metrics"]
        }
      ]
    },
    {
      id: "ml",
      title: "Machine Learning Algorithms",
      icon: "Brain",
      description: "Supervised & Unsupervised learning algorithms for classification, regression & clustering",
      subgroups: [
        {
          name: "Regression & Regularization",
          items: ["Linear Regression", "Logistic Regression", "L1 / Lasso", "L2 / Ridge", "ElasticNet"]
        },
        {
          name: "Tree-Based & Ensembles",
          items: ["Decision Trees", "Random Forest", "Gradient Boosting", "XGBoost", "LightGBM"]
        },
        {
          name: "Classification & Clustering",
          items: ["K-Nearest Neighbors (KNN)", "Naive Bayes", "Support Vector Machines (SVM)", "K-Means", "DBSCAN", "PCA"]
        }
      ]
    },
    {
      id: "evaluation",
      title: "Model Evaluation & Tuning",
      icon: "CheckCircle2",
      description: "Metrics for rigorous model assessment, validation & hyperparameter optimization",
      subgroups: [
        {
          name: "Classification Metrics",
          items: ["Confusion Matrix", "Precision & Recall", "F1 Score", "ROC-AUC Curve"]
        },
        {
          name: "Regression Metrics",
          items: ["Mean Absolute Error (MAE)", "Mean Squared Error (MSE)", "Root Mean Squared Error (RMSE)", "R² & Adjusted R²"]
        },
        {
          name: "Validation & Tuning",
          items: ["K-Fold Cross Validation", "Grid Search CV", "Randomized Search CV", "Train-Validation-Test Split"]
        }
      ]
    },
    {
      id: "deep-learning",
      title: "Deep Learning & Neural Networks",
      icon: "Network",
      description: "Neural network architectures, attention mechanisms, and model adaptation strategies",
      subgroups: [
        {
          name: "Architectures",
          items: ["ANN & Multi-Layer Perceptrons (MLP)", "Convolutional Neural Networks (CNN)", "RNN, LSTM & GRU", "Transformers & Attention Mechanism"]
        },
        {
          name: "Training & Fine-Tuning",
          items: ["Transfer Learning", "Fine-Tuning Pre-trained Models", "Weight Initialization", "Regularization (Dropout)"]
        }
      ]
    },
    {
      id: "optimization",
      title: "Optimization Algorithms",
      icon: "Zap",
      description: "First-order optimization methods for minimizing objective functions & neural loss",
      subgroups: [
        {
          name: "Gradient Optimizers",
          items: ["Gradient Descent", "Stochastic Gradient Descent (SGD)", "Mini-Batch Gradient Descent", "Nesterov Momentum", "RMSprop", "Adam Optimizer"]
        }
      ]
    },
    {
      id: "rl",
      title: "Reinforcement Learning Concepts",
      icon: "Compass",
      description: "Sequential decision-making frameworks, Markov Decision Processes, and policy learning",
      subgroups: [
        {
          name: "Core RL Fundamentals",
          items: ["Markov Decision Process (MDP)", "State, Action & Reward", "Policy & Value Functions", "Q-Learning", "Bellman Equation", "Epsilon-Greedy Exploration"]
        }
      ]
    }
  ]
};
