🔥🔥🔥

# Giám sát vận tải đường bộ sử dụng NB-IoT 🚚

#### Đề tài sử dụng STM32 kết nối với các cảm biến và BC66 module để gửi các dữ liệu đọc được lên trên server để giám sát

#### Server được viết bằng Nodejs và expressjs

#### Project sử dụng phương thức truyền là MQTT protocol

**1.** **STM32** 🔌

Tuỳ chỉnh STM32CubeMX bằng cài đặt **"General peripheral Initalizion as a pair of '.c / .h' file per peripheral"** trong cài đặt xuất project.

Thêm các ngắt **NVIC** và cho các USART

Copy các thư viện file .h vào **inc** và .c vào **src** (STM32-with-BC66)


*USART 1 là GPS module*, *USART 2 giao tiếp với BC66* và *USART 3 là terminal cũng như ST-Link* để nạp code


**2.** **Server** 💻

Download Monitor-Server về máy 

Mở file với VS Code 

Chạy lần lượt `npm start`, `node Subcriber/MQTT_SUB_ND.js`, `node Subcriber/MQTT_SUB_VT.js`, `node Subcriber/MQTT_SUB_temperatures.js` `node Subcriber/MQTT_SUB_geoJSON.js` trong terminal để khởi động server và bật subcriber tới MQTT Broker


 


