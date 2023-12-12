// import React from 'react'
import Swal from "sweetalert2";
// import AsyncStorage from '@react-native-async-storage/async-storage';

export const Messaege = (title, msg, icon) => {
  Swal.fire({
    title: title,
    text: msg,
    icon: icon,
    timer: 1500,
    showConfirmButton: false,
  });
};

export const ModalBerhasil = (url) => {
  Swal.fire({
    title: "Selamat!",
    text: "Anda telah berhasil menyelesaikan modul",
    imageUrl: url,
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
};
