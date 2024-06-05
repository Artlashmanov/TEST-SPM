import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [recentOrders, setRecentOrders] = useState([]);
  const [currentOrders, setCurrentOrders] = useState('');
  const [availableEquipment, setAvailableEquipment] = useState('');
  const [performanceMetrics, setPerformanceMetrics] = useState('');

  useEffect(() => {
    setRecentOrders(["Заказ 1", "Заказ 2", "Заказ 3"]);
    setCurrentOrders("5 текущих заказов");
    setAvailableEquipment("10 доступных единиц техники");
    setPerformanceMetrics("Все показатели в норме");
  }, []);

  const createNewOrder = () => {
    alert("Создать новый заказ!");
  };

  const checkEquipmentAvailability = () => {
    alert("Проверить доступность техники!");
  };

  return (
    <div className="App">
      <header>
        <h1>Система Планирования и Мониторинга</h1>
      </header>
      <div className="container">
        <nav className="vertical-nav">
          <a href="#">Главная</a>
          <a href="#">Заказы</a>
          <a href="#">Техника</a>
          <a href="#">Клиенты</a>
          <a href="#">Отчеты</a>
          <a href="#">Настройки</a>
        </nav>
        <div className="content">
          <div className="sidebar">
            <h2>Последние заказы</h2>
            <div className="order-buttons">
              {recentOrders.map((order, index) => (
                <button key={index} className="order-button">{order}</button>
              ))}
            </div>
            <button className="action-button" onClick={createNewOrder}>Создать новый заказ</button>
            <button className="action-button" onClick={checkEquipmentAvailability}>Проверить доступность техники</button>
          </div>
          <div className="dashboard-content">
            <h2>Панель управления</h2>
            <div className="dashboard">
              <div className="card">
                <h3>Текущие заказы</h3>
                <p>{currentOrders}</p>
              </div>
              <div className="card">
                <h3>Доступная техника</h3>
                <p>{availableEquipment}</p>
              </div>
              <div className="card">
                <h3>Показатели производительности</h3>
                <p>{performanceMetrics}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>Контактная информация | Поддержка</p>
      </footer>
    </div>
  );
}

export default App;
