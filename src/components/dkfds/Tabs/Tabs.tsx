import React from 'react';


function Tabs (props: any): JSX.Element {

    return (
        <>
        <div className="tabnav" role="tablist">

<button aria-controls="tabpanel1" id="tab1" className="tabnav-item"
    role="tab" aria-selected="false">
    <span>Fane 1</span>
</button>
<section className="tabnav-panel" aria-hidden="true" role="tabpanel"
   tabIndex={0} id="tabpanel1" aria-labelledby="tab1">
    <h2>Indhold 1</h2>
    <p>Mauris tempor, tellus a laoreet finibus, neque metus hendrerit
        augue, ac lacinia nisl dolor et augue. Ut lorem massa,
        consequat ut orci sit amet, maximus dictum orci. Mauris
        pharetra nunc sed augue bibendum semper. Donec in cursus orci.
        Ut sed posuere elit, quis semper turpis. Curabitur malesuada
        nisi nec nisl facilisis ornare. Praesent vestibulum, velit id
        sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem
        massa eget urna.</p>
</section>

<button aria-controls="tabpanel2" id="tab2" className="tabnav-item"
    role="tab" aria-selected="true">
    <span>Fane 2</span>
</button>

<section className="tabnav-panel" aria-hidden="false" role="tabpanel"
    tabIndex={0} id="tabpanel2" aria-labelledby="tab2">
    <h2>Indhold 2</h2>
    <p>Mauris tempor, tellus a laoreet finibus, neque metus hendrerit
        augue, ac lacinia nisl dolor et augue. Ut lorem massa,
        consequat ut orci sit amet, maximus dictum orci. Mauris
        pharetra nunc sed augue bibendum semper. Donec in cursus orci.
        Ut sed posuere elit, quis semper turpis. Curabitur malesuada
        nisi nec nisl facilisis ornare. Praesent vestibulum, velit id
        sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem
        massa eget urna.</p>
</section>

<button aria-controls="tabpanel3" id="tab3" className="tabnav-item"
    role="tab" aria-selected="false">
    <span>Fane 3</span>
</button>
<section className="tabnav-panel" aria-hidden="true" role="tabpanel"
    tabIndex={0} id="tabpanel3" aria-labelledby="tab3">
    <h2>Indhold 3</h2>
    <p>Mauris tempor, tellus a laoreet finibus, neque metus hendrerit
        augue, ac lacinia nisl dolor et augue. Ut lorem massa,
        consequat ut orci sit amet, maximus dictum orci. Mauris
        pharetra nunc sed augue bibendum semper. Donec in cursus orci.
        Ut sed posuere elit, quis semper turpis. Curabitur malesuada
        nisi nec nisl facilisis ornare. Praesent vestibulum, velit id
        sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem
        massa eget urna.</p>
</section>

<button aria-controls="tabpanel4" id="tab4" className="tabnav-item"
    role="tab" aria-selected="false">
    <span>Fane 4</span>
</button>
<section className="tabnav-panel" aria-hidden="true" role="tabpanel"
    tabIndex={0} id="tabpanel4" aria-labelledby="tab4">
    <h2>Indhold 4</h2>
    <p>Mauris tempor, tellus a laoreet finibus, neque metus hendrerit
        augue, ac lacinia nisl dolor et augue. Ut lorem massa,
        consequat ut orci sit amet, maximus dictum orci. Mauris
        pharetra nunc sed augue bibendum semper. Donec in cursus orci.
        Ut sed posuere elit, quis semper turpis. Curabitur malesuada
        nisi nec nisl facilisis ornare. Praesent vestibulum, velit id
        sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem
        massa eget urna.</p>
</section>

<button aria-controls="tabpanel5" id="tab5" className="tabnav-item"
    role="tab" aria-selected="false">
    <span>Fane 5</span>
</button>
<section className="tabnav-panel" aria-hidden="true" role="tabpanel"
    tabIndex={0} id="tabpanel5" aria-labelledby="tab5">
    <h2>Indhold 5</h2>
    <p>Mauris tempor, tellus a laoreet finibus, neque metus hendrerit
        augue, ac lacinia nisl dolor et augue. Ut lorem massa,
        consequat ut orci sit amet, maximus dictum orci. Mauris
        pharetra nunc sed augue bibendum semper. Donec in cursus orci.
        Ut sed posuere elit, quis semper turpis. Curabitur malesuada
        nisi nec nisl facilisis ornare. Praesent vestibulum, velit id
        sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem
        massa eget urna.</p>
</section>

<button aria-controls="tabpanel6" id="tab6" className="tabnav-item"
    role="tab" aria-selected="false">
    <span>Fane 6</span>
</button>
<section className="tabnav-panel" aria-hidden="true" role="tabpanel"
    tabIndex={0} id="tabpanel6" aria-labelledby="tab6">
    <h2>Indhold 6</h2>
    <p>Mauris tempor, tellus a laoreet finibus, neque metus hendrerit
        augue, ac lacinia nisl dolor et augue. Ut lorem massa,
        consequat ut orci sit amet, maximus dictum orci. Mauris
        pharetra nunc sed augue bibendum semper. Donec in cursus orci.
        Ut sed posuere elit, quis semper turpis. Curabitur malesuada
        nisi nec nisl facilisis ornare. Praesent vestibulum, velit id
        sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem
        massa eget urna.</p>
</section>

</div>
        </>
    );
}

export default Tabs;