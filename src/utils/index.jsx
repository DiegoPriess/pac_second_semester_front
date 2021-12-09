export const formateDate = (type, date) => {

    let newDate = new Date(date);

    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(newDate);
    let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(newDate);
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);

    if(type === "default"){

        return `${year}-${month}-${day}`;

    }else if(type === "pt"){

        return `${day}/${month}/${year}`;

    }
                
}     