interface Question {
    question: string;
    choices: string[];
    correctAnswer: number;
  }
  
  const questions: Question[] = [
    {
      question: "1. ดาวเคราะห์ที่อยู่ใกล้ดวงอาทิตย์ที่สุดคืออะไร?",
      choices: ["ดาวพุธ", "ดาวศุกร์", "โลก", "ดาวอังคาร"],
      correctAnswer: 0,
    },
    {
      question: "2. แกแล็กซีของเรามีชื่อว่าอะไร?",
      choices: ["ทางช้างเผือก", "แอนโดรเมดา", "ซัมซุงกาแล็คซี่", "ไวปี้"],
      correctAnswer: 0,
    },
    {
      question: "3. ดาวเคราะห์ที่ใหญ่ที่สุดในระบบสุริยะคืออะไร?",
      choices: ["ดาวเสาร์", "ดาวพฤหัสบดี", "ดาวยูเรนัส", "ดาวเนปจูน"],
      correctAnswer: 1,
    },
    {
      question: "4. หน่วยวัดระยะทางในอวกาศที่ใหญ่ที่สุดคืออะไร?",
      choices: ["หน่วยดาราศาสตร์", "ปีแสง", "พาร์เซก", "กิโลเมตร"],
      correctAnswer: 2,
    },
    {
      question: "5. ดาวเคราะห์ดวงใดมีวงแหวนที่โดดเด่นที่สุด?",
      choices: ["ดาวพฤหัสบดี", "ดาวเสาร์", "ดาวยูเรนัส", "ดาวเนปจูน"],
      correctAnswer: 1,
    },
    {
      question: "6. ปรากฏการณ์ใดที่เกิดจากการยุบตัวของดาวมวลมาก?",
      choices: ["ซุปเปอร์โนวา", "ดาวเคราะห์น้อย", "ดาวหาง", "ดาวเคราะห์แคระ"],
      correctAnswer: 0,
    },
    {
      question: "7. ดาวฤกษ์ที่อยู่ใกล้โลกมากที่สุดหลังจากดวงอาทิตย์คืออะไร?",
      choices: ["พร็อกซิมา เซนทอรี่", "ซิริอุส", "อัลฟ่า เซนทอรี่", "เบเทลกีส"],
      correctAnswer: 0,
    },
    {
      question: "8. หน่วย 'ปีแสง' หมายถึงอะไร?",
      choices: ["เวลาที่แสงใช้ในการเดินทางหนึ่งปี", "ระยะทางที่แสงเดินทางในหนึ่งปี", "อายุของดวงดาว", "ความสว่างของดวงดาว"],
      correctAnswer: 1,
    },
    {
      question: "9. ปรากฏการณ์ใดเกิดขึ้นเมื่อดวงจันทร์ผ่านระหว่างโลกและดวงอาทิตย์?",
      choices: ["สุริยุปราคา", "จันทรุปราคา", "ซุปเปอร์โนวา", "หลุมดำ"],
      correctAnswer: 0,
    },
    {
      question: "10. ธาตุที่มีมากที่สุดในจักรวาลคืออะไร?",
      choices: ["ไฮโดรเจน", "ฮีเลียม", "ออกซิเจน", "คาร์บอน"],
      correctAnswer: 0,
    },
    {
      question: "11. หลุมดำเกิดขึ้นได้อย่างไร?",
      choices: ["จากการยุบตัวของดาวมวลมาก", "จากการรวมตัวของดาวเคราะห์", "จากการระเบิดของดาวเคราะห์น้อย", "จากการชนกันของกาแล็กซี"],
      correctAnswer: 0,
    },
    {
      question: "12. ดาวเคราะห์ดวงใดที่เรียกว่า 'ดาวเคราะห์แดง'?",
      choices: ["ดาวอังคาร", "ดาวพฤหัสบดี", "ดาวเสาร์", "ดาวศุกร์"],
      correctAnswer: 0,
    },
    {
      question: "13. ดวงจันทร์ของดาวเคราะห์ดวงใดชื่อว่า 'ไททัน'?",
      choices: ["ดาวเสาร์", "ดาวพฤหัสบดี", "ดาวยูเรนัส", "ดาวเนปจูน"],
      correctAnswer: 0,
    },
    {
      question: "14. ทฤษฎีใดที่อธิบายการกำเนิดของจักรวาล?",
      choices: ["บิ๊กแบง", "ทฤษฎีสตริง", "ทฤษฎีควอนตัม", "ทฤษฎีสัมพัทธภาพ"],
      correctAnswer: 0,
    },
    {
      question: "15. เครื่องมือใดใช้ในการวัดระยะทางไปยังดวงดาวที่ไกลมาก?",
      choices: ["พาร์เซก", "สเปกโทรสโคป", "กล้องโทรทรรศน์", "กล้องจุลทรรศน์"],
      correctAnswer: 0,
    },
    {
      question: "16. ดาวเคราะห์ดวงใดมีความหนาแน่นน้อยกว่าน้ำ?",
      choices: ["ดาวเสาร์", "ดาวพฤหัสบดี", "ดาวอังคาร", "ดาวศุกร์"],
      correctAnswer: 0,
    },
    {
      question: "17. ปรากฏการณ์ใดที่ทำให้เกิดการเลื่อนสีแดงในสเปกตรัมของดวงดาว?",
      choices: ["การขยายตัวของจักรวาล", "การยุบตัวของดวงดาว", "การชนกันของกาแล็กซี", "การหมุนของดวงดาว"],
      correctAnswer: 0,
    },
    {
      question: "18. ดาราจักรที่อยู่ใกล้แกแล็กซีทางช้างเผือกที่สุดคืออะไร?",
      choices: ["แอนโดรเมดา", "แมกเจลแลน", "ซอมเบรโร", "ไวปี้"],
      correctAnswer: 0,
    },
    {
      question: "19. ปรากฏการณ์ใดที่เกิดจากการชนกันของอนุภาควัตถุมืด?",
      choices: ["ไม่มีปรากฏการณ์", "การระเบิดรังสีแกมมา", "ซุปเปอร์โนวา", "พัลซาร์"],
      correctAnswer: 0,
    },
    {
      question: "20. ใครเป็นผู้เสนอทฤษฎีสัมพัทธภาพ?",
      choices: ["อัลเบิร์ต ไอน์สไตน์", "ไอแซก นิวตัน", "นิโคลา เทสลา", "สตีเฟน ฮอว์คิง"],
      correctAnswer: 0,
    },
    {
      question: "21. ดาวเคราะห์ที่มีดวงจันทร์มากที่สุดคืออะไร?",
      choices: ["ดาวพฤหัสบดี", "ดาวเสาร์", "ดาวยูเรนัส", "ดาวเนปจูน"],
      correctAnswer: 0,
    },
    {
      question: "22. 'Event Horizon' คืออะไร?",
      choices: ["ขอบเขตของหลุมดำ", "จุดกำเนิดของซุปเปอร์โนวา", "บริเวณที่ดาวเกิดใหม่", "ตำแหน่งของควาซาร์"],
      correctAnswer: 0,
    },
    {
      question: "23. ปรากฏการณ์ใดที่ทำให้เวลาช้าลงในสนามแรงโน้มถ่วงสูง?",
      choices: ["Time Dilation", "Redshift", "Blueshift", "Gravitational Lensing"],
      correctAnswer: 0,
    },
    {
      question: "24. ดวงอาทิตย์เป็นดาวฤกษ์ประเภทใด?",
      choices: ["ดาวแคระเหลือง", "ดาวยักษ์แดง", "ดาวนิวตรอน", "หลุมดำ"],
      correctAnswer: 0,
    },
    {
      question: "25. อุปกรณ์ใดที่ใช้ในการตรวจจับคลื่นความโน้มถ่วง?",
      choices: ["LIGO", "กล้องโทรทรรศน์ฮับเบิล", "กล้องรังสีเอ็กซ์", "สเปกโทรสโคป"],
      correctAnswer: 0,
    },
    {
      question: "26. ปรากฏการณ์ใดที่เกิดจากแสงที่โค้งรอบวัตถุมวลมาก?",
      choices: ["Gravitational Lensing", "Redshift", "Time Dilation", "Quantum Entanglement"],
      correctAnswer: 0,
    },
    {
      question: "27. ดาวเคราะห์น้อยที่ชนโลกเมื่อ 65 ล้านปีก่อนทำให้เกิดอะไร?",
      choices: ["การสูญพันธุ์ของไดโนเสาร์", "การเกิดขึ้นของมนุษย์", "การเปลี่ยนแปลงของสนามแม่เหล็กโลก", "การเพิ่มขึ้นของระดับน้ำทะเล"],
      correctAnswer: 0,
    },
    {
      question: "28. พัลซาร์คืออะไร?",
      choices: ["ดาวนิวตรอนที่หมุนเร็ว", "ดาวเคราะห์น้อย", "หลุมดำ", "ควาซาร์"],
      correctAnswer: 0,
    },
    {
      question: "29. ปรากฏการณ์ใดที่เกิดจากการรวมตัวของหลุมดำสองหลุม?",
      choices: ["คลื่นความโน้มถ่วง", "ซุปเปอร์โนวา", "การเลื่อนสีแดง", "การระเบิดรังสีแกมมา"],
      correctAnswer: 0,
    },
    {
      question: "30. ทฤษฎีสตริงเสนอว่าจักรวาลมีมิติกี่มิติ?",
      choices: ["11 มิติ", "3 มิติ", "4 มิติ", "10 มิติ"],
      correctAnswer: 0,
    },
    {
      question: "31. ดาวเคราะห์ดวงใดที่หมุนรอบตัวเองในทิศทางตรงข้ามกับดาวเคราะห์อื่น?",
      choices: ["ดาวศุกร์", "ดาวพุธ", "ดาวอังคาร", "ดาวเนปจูน"],
      correctAnswer: 0,
    },
    {
      question: "32. 'โอรัตคลาวด์' คืออะไร?",
      choices: ["กลุ่มของวัตถุที่อยู่รอบระบบสุริยะ", "วงแหวนของดาวเสาร์", "บริเวณที่ดาวเคราะห์เกิด", "ดวงจันทร์ของดาวพฤหัสบดี"],
      correctAnswer: 0,
    },
    {
      question: "33. ใครเป็นผู้ค้นพบกฎของการเคลื่อนที่ของดาวเคราะห์?",
      choices: ["โยฮันเนส เคปเลอร์", "ไอแซก นิวตัน", "กาลิเลโอ กาลิเลอี", "นิโคเลาส์ โคเปอร์นิคัส"],
      correctAnswer: 0,
    },
    {
      question: "34. ปรากฏการณ์ใดที่เกิดขึ้นเมื่อวัตถุเคลื่อนที่เข้าหาผู้สังเกต?",
      choices: ["Blueshift", "Redshift", "Time Dilation", "Gravitational Lensing"],
      correctAnswer: 0,
    },
    {
      question: "35. ควาซาร์คืออะไร?",
      choices: ["วัตถุที่สว่างมากและอยู่ไกล", "ดาวเคราะห์น้อย", "ดาวเคราะห์แคระ", "หลุมดำ"],
      correctAnswer: 0,
    },
    {
      question: "36. ทฤษฎีใดที่อธิบายแรงพื้นฐานทั้งสี่ในธรรมชาติ?",
      choices: ["ทฤษฎีทุกสิ่ง", "ทฤษฎีสัมพัทธภาพทั่วไป", "ทฤษฎีควอนตัม", "ทฤษฎีสตริง"],
      correctAnswer: 0,
    },
    {
      question: "37. ปรากฏการณ์ใดที่อธิบายว่าความเร็วของแสงคงที่ในทุกกรอบอ้างอิง?",
      choices: ["ทฤษฎีสัมพัทธภาพพิเศษ", "ทฤษฎีควอนตัม", "กฎของนิวตัน", "ทฤษฎีบิ๊กแบง"],
      correctAnswer: 0,
    },
    {
      question: "38. อะไรคือสาเหตุที่ทำให้ดาวเคราะห์มีฤดูกาล?",
      choices: ["การเอียงของแกนโลก", "ระยะทางจากดวงอาทิตย์", "ความเร็วในการหมุนรอบตัวเอง", "สนามแม่เหล็กโลก"],
      correctAnswer: 0,
    },
    {
      question: "39. ดาวฤกษ์ที่มีมวลน้อยจะสิ้นชีวิตเป็นอะไร?",
      choices: ["ดาวแคระขาว", "ดาวนิวตรอน", "หลุมดำ", "ซุปเปอร์โนวา"],
      correctAnswer: 0,
    },
    {
      question: "40. ใครเป็นผู้ค้นพบกฎแรงโน้มถ่วงสากล?",
      choices: ["ไอแซก นิวตัน", "อัลเบิร์ต ไอน์สไตน์", "โยฮันเนส เคปเลอร์", "กาลิเลโอ กาลิเลอี"],
      correctAnswer: 0,
    },
    {
      question: "41. ปรากฏการณ์ใดที่ทำให้แสงไม่สามารถหนีออกจากหลุมดำได้?",
      choices: ["แรงโน้มถ่วงสูงมาก", "ขอบฟ้าเหตุการณ์", "ความเร็วแสงลดลง", "การโค้งของกาลอวกาศ"],
      correctAnswer: 0,
    },
    {
      question: "42. ดวงจันทร์ของดาวพฤหัสบดีที่มีภูเขาไฟยังคงทำงานอยู่ชื่อว่าอะไร?",
      choices: ["ไอโอ", "ยูโรปา", "แกนีมีด", "คัลลิสโต"],
      correctAnswer: 0,
    },
    {
      question: "43. ปรากฏการณ์ใดที่เกิดจากอนุภาคที่เคลื่อนที่เร็วกว่าแสงในสื่อ?",
      choices: ["รังสีเชเรนคอฟ", "รังสีแกมมา", "รังสีเอ็กซ์", "รังสีอินฟราเรด"],
      correctAnswer: 0,
    },
    {
      question: "44. ทฤษฎีใดที่เสนอว่าจักรวาลจะจบลงด้วยการขยายตัวไม่สิ้นสุด?",
      choices: ["Big Freeze", "Big Crunch", "Big Rip", "Steady State"],
      correctAnswer: 0,
    },
    {
      question: "45. ปรากฏการณ์ใดที่ทำให้เกิดภาพหลายภาพของวัตถุเดียวกันในอวกาศ?",
      choices: ["Gravitational Lensing", "Time Dilation", "Redshift", "Blueshift"],
      correctAnswer: 0,
    },
    {
      question: "46. 'Singularity' ในบริบทของหลุมดำหมายถึงอะไร?",
      choices: ["จุดที่มีความหนาแน่นและแรงโน้มถ่วงไม่สิ้นสุด", "ขอบของหลุมดำ", "บริเวณที่ไม่มีแรงโน้มถ่วง", "จุดที่เวลาเร็วขึ้น"],
      correctAnswer: 0,
    },
    {
      question: "47. ดาวฤกษ์ประเภทใดที่ระเบิดเป็นซุปเปอร์โนวาประเภท Ia?",
      choices: ["ดาวแคระขาว", "ดาวยักษ์แดง", "ดาวนิวตรอน", "ดาวแคระน้ำตาล"],
      correctAnswer: 0,
    },
    {
      question: "48. ปรากฏการณ์ใดที่แสดงว่าจักรวาลกำลังขยายตัวด้วยความเร่ง?",
      choices: ["พลังงานมืด", "สสารมืด", "พื้นหลังไมโครเวฟคอสมิก", "การเลื่อนสีแดง"],
      correctAnswer: 0,
    },
    {
      question: "49. 'Cosmic Microwave Background' คืออะไร?",
      choices: ["รังสีที่เหลือจากบิ๊กแบง", "รังสีจากดวงอาทิตย์", "รังสีจากหลุมดำ", "รังสีจากควาซาร์"],
      correctAnswer: 0,
    },
    {
      question: "50. ทฤษฎีใดที่รวมแรงโน้มถ่วงกับกลศาสตร์ควอนตัม?",
      choices: ["ทฤษฎีความโน้มถ่วงควอนตัม", "ทฤษฎีสัมพัทธภาพทั่วไป", "ทฤษฎีควอนตัม", "ทฤษฎีบิ๊กแบง"],
      correctAnswer: 0,
    },
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    let currentQuestionIndex = 0;
    let score = 0;
  
    const startButton = document.getElementById('start-button') as HTMLButtonElement;
    const nextButton = document.getElementById('next-button') as HTMLButtonElement;
    const restartButton = document.getElementById('restart-button') as HTMLButtonElement;
  
    const startScreen = document.getElementById('start-screen')!;
    const quizScreen = document.getElementById('quiz-screen')!;
    const resultScreen = document.getElementById('result-screen')!;
  
    const questionElement = document.getElementById('question')!;
    const choicesElement = document.getElementById('choices')!;
    const nextButtonContainer = document.getElementById('next-button-container')!;
  
    startButton.addEventListener('click', startQuiz);
    nextButton.addEventListener('click', () => {
      currentQuestionIndex++;
      showQuestion();
    });
    restartButton.addEventListener('click', restartQuiz);
  
    function startQuiz(): void {
      startScreen.style.display = 'none';
      quizScreen.style.display = 'block';
      currentQuestionIndex = 0;
      score = 0;
      showQuestion();
    }
  
    function showQuestion(): void {
      resetState();
      if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
  
        currentQuestion.choices.forEach((choice, index) => {
          const button = document.createElement('button');
          button.textContent = choice;
          button.classList.add('choice-button');
          button.addEventListener('click', () => selectAnswer(index));
          choicesElement.appendChild(button);
        });
      } else {
        showResult();
      }
    }
  
    function resetState(): void {
      nextButtonContainer.classList.remove('show');
      while (choicesElement.firstChild) {
        choicesElement.removeChild(choicesElement.firstChild);
      }
    }
  
    function selectAnswer(selectedIndex: number): void {
      const currentQuestion = questions[currentQuestionIndex];
  
      if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
      }
  
      Array.from(choicesElement.children).forEach((button, index) => {
        if (index === currentQuestion.correctAnswer) {
          (button as HTMLButtonElement).classList.add('correct');
        } else {
          (button as HTMLButtonElement).classList.add('incorrect');
        }
        (button as HTMLButtonElement).disabled = true;
      });
  
      nextButtonContainer.classList.add('show');
    }
  
    function showResult(): void {
      quizScreen.style.display = 'none';
      resultScreen.style.display = 'block';
  
      const resultMessage = document.getElementById('result-message')!;
      const scoreElement = document.getElementById('score')!;
  
      let message = '';
  
      const percentage = (score / questions.length) * 100;
  
      if (percentage >= 80) {
        message = 'ยอดเยี่ยม! คุณเก่งมากในเรื่องดาราศาสตร์และอวกาศ';
      } else if (percentage >= 50) {
        message = 'ดีมาก! คุณมีความรู้ที่ดีเกี่ยวกับดาราศาสตร์และอวกาศ';
      } else {
        message = 'คุณอาจต้องศึกษาดาราศาสตร์และอวกาศเพิ่มเติม';
      }
  
      resultMessage.textContent = message;
      scoreElement.textContent = `คุณได้คะแนน ${score} จาก ${questions.length} ข้อ`;
    }
  
    function restartQuiz(): void {
      resultScreen.style.display = 'none';
      startScreen.style.display = 'block';
    }
  });