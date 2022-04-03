const createUri = (value: string) => {
    return value.toLocaleLowerCase().replace(" ", "-");
};

export default createUri;
