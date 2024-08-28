export interface ICollapse {
    title: string;
    nameCollapse: string;
    active: boolean;
    description: string;
}

export const faqCollapseData: ICollapse[] = [
    {
        title: 'Important, popular and topical question?',
        nameCollapse: 'collapseOne',
        active: true,
        description: `It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.`
    },
    {
        title: 'Popular and topical question?',
        nameCollapse: 'collapseTwo',
        active: false,
        description: `It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.`
    },
    {
        title: 'Important and topical question?',
        nameCollapse: 'collapseThree',
        active: false,
        description: `It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.`
    },
    {
        title: 'Important, popular and topical question?',
        nameCollapse: 'collapseFour',
        active: false,
        description: `It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.`
    },
];