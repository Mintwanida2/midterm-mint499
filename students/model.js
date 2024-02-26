const data = [
    {id: 6400676, name: 'Wanida Niyomdecha', major: 'Computer Engineering' },
    {id: 6400823, name: 'Waree Jinanun', major: 'Computer Engineering' },
    {id: 6400675, name: 'Chayanut Loipras', major: 'Civil Engineering' },
    {id: 6400672, name: 'Aomsin Conmasi', major: 'Electrical Engineering'},
    
];

function getAll(){
    return Promise.resolve(data);
}

module.exports = getAll;

