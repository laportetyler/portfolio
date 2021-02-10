const scrollIntoView = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth'});
}

export default scrollIntoView;