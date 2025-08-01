import React, { useState, useEffect } from 'react';
     import axios from 'axios';
     import { motion } from 'framer-motion';
     import './VoiceSurvey.css';

     const VoiceSurvey = () => {
       // Inject OmniDim web widget script on mount
       useEffect(() => {
         const script = document.createElement('script');
         script.id = 'omnidimension-web-widget';
         script.async = true;
         script.src = 'https://backend.omnidim.io/web_widget.js?secret_key=966db3fa32aad479ffe01cb14a4cf81b';
         document.body.appendChild(script);
         return () => {
           document.body.removeChild(script);
         };
       }, []);
       const [isRecording, setIsRecording] = useState(false);
       const [surveyStep, setSurveyStep] = useState(0);
       const [responses, setResponses] = useState({});
       const [currentQuestion, setCurrentQuestion] = useState('');
       const [mediaRecorder, setMediaRecorder] = useState(null);
       const [audioBlob, setAudioBlob] = useState(null);

       const questions = [
         "What time do you usually go to bed and wake up?",
         "How tidy do you like your room to be?",
         "How do you usually spend your evenings at home?",
       ];

       useEffect(() => {
         if (surveyStep < questions.length) {
           setCurrentQuestion(questions[surveyStep]);
         } else if (surveyStep < 5) {
           fetchAdaptiveQuestion();
         } else {
           submitSurvey();
         }
       }, [surveyStep]);

       const startRecording = async () => {
         try {
           const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
           const recorder = new MediaRecorder(stream);
           setMediaRecorder(recorder);
           const audioChunks = [];

           recorder.ondataavailable = (event) => {
             audioChunks.push(event.data);
           };

           recorder.onstop = () => {
             const blob = new Blob(audioChunks, { type: 'audio/wav' });
             setAudioBlob(blob);
             sendToOmniDim(blob);
           };

           recorder.start();
           setIsRecording(true);
         } catch (error) {
           console.error('Error accessing microphone:', error);
         }
       };

       const stopRecording = () => {
         if (mediaRecorder) {
           mediaRecorder.stop();
           setIsRecording(false);
         }
       };

       const sendToOmniDim = async (audioBlob) => {
         const formData = new FormData();
         formData.append('file', audioBlob, 'response.wav');
         formData.append('question', currentQuestion);

         try {
           const response = await axios.post('http://localhost:8000/api/voice/process', formData, {
             headers: { 'Content-Type': 'multipart/form-data' },
           });

           const { text, sentiment, tags } = response.data;
           setResponses((prev) => ({
             ...prev,
             [surveyStep]: { question: currentQuestion, text, sentiment, tags },
           }));
           setSurveyStep(surveyStep + 1);
         } catch (error) {
           console.error('Error processing audio:', error);
         }
       };

       const fetchAdaptiveQuestion = async () => {
         try {
           const response = await axios.post('http://localhost:8000/api/voice/adaptive', {
             responses,
           });
           setCurrentQuestion(response.data.question);
         } catch (error) {
           console.error('Error fetching adaptive question:', error);
           setSurveyStep(surveyStep + 1);
         }
       };

       const submitSurvey = async () => {
         try {
           const response = await axios.post('http://localhost:8000/api/survey/submit', {
             responses,
           });
           console.log('Survey submitted:', response.data);
           // Redirect to dashboard or show confirmation
         } catch (error) {
           console.error('Error submitting survey:', error);
         }
       };

       return (
         <motion.div
           className="max-w-md mx-auto p-6 bg-gradient-to-br from-pink-100 to-purple-200 rounded-lg shadow-lg"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
         >
           <h2 className="text-2xl font-bold mb-4 text-center text-purple-800">
             Voice Survey
           </h2>
           <p className="text-lg mb-6 text-center">{currentQuestion}</p>
           <div className="flex justify-center">
             <button
               onClick={isRecording ? stopRecording : startRecording}
               className={`px-6 py-3 rounded-full text-white font-semibold ${
                 isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-purple-500 hover:bg-purple-600'
               } transition-colors duration-300`}
             >
               {isRecording ? 'Stop Recording' : 'Start Recording'}
             </button>
           </div>
         </motion.div>
       );
     };

     export default VoiceSurvey;