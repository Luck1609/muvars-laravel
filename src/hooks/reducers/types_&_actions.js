export const SHOW_MODAL = 'SHOW MODAL', 
            SHOW_NOTICE = 'SHOW NOTICE'


export const show_modal = (payload) => ({type: SHOW_MODAL, payload}),
            show_notice = (payload) => ({type: SHOW_NOTICE, payload})