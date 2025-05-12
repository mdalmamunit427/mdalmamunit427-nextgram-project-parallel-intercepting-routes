"use client"

import { useRouter } from 'next/navigation'
import React, { type ElementRef, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';

const Modal = ({children} : {children: React.ReactNode}) => {
    const router = useRouter();
    const dailogRef = useRef<ElementRef<'dialog'>>(null);

    useEffect(() => {
        if(!dailogRef.current?.open) {
            dailogRef.current?.showModal()
        }
    }, [])

    function onDismiss() {
        router.back()
    }
  return (
    createPortal(<div className='modal-backdrop'>
      <dialog ref={dailogRef} className='modal' onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} className='close-button'/>
      </dialog>
    </div>, document.getElementById('modal-root')!)
  )
}

export default Modal