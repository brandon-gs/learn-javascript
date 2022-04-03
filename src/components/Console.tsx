import React from "react";

const Console = React.forwardRef((props: any, ref: any) => (
    <section
        ref={ref}
        id="console"
        style={{
            borderTop: "solid 1px black",
            borderLeft: "solid 1px black",
            paddingTop: 8,
            paddingLeft: 8,
        }}
    >
        <p>{"/**"}</p>
        <p>{"/* Su salida de prueba ira aquí"}</p>
        <p>*/</p>
    </section>
));

export default Console;
