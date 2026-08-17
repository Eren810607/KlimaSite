import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function AccordionPage() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div>

            <Accordion sx={{ fontFamily: 'arial', backgroundColor: 'lightblue' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component="span" sx={{ width: '70%', flexShrink: 0 }}>
                        Klima seçerken nelere dikkat etmeliyim?
                    </Typography>

                </AccordionSummary>
                <AccordionDetails sx={{ fontFamily: 'arial', fontWeight: '700', backgroundColor: '#e6dbdb' }}>
                    <Typography>
                        Odanın metrekaresi, yalıtımı, cephe yönü ve kullanım amacı klima seçiminde önemli faktörlerdir.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ fontFamily: 'arial', backgroundColor: 'lightblue' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography component="span" sx={{ width: '70%', flexShrink: 0 }}>
                        Evim için kaç BTU klima almalıyım?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ fontFamily: 'arial', fontWeight: '700', backgroundColor: '#e6dbdb' }}>
                    <Typography>
                        Gerekli BTU değeri odanın büyüklüğüne ve yalıtım durumuna göre değişir. Keşif yaparak uygun kapasite konusunda yardımcı olabiliriz.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ fontFamily: 'arial', backgroundColor: 'lightblue' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography component="span" sx={{ width: '70%', flexShrink: 0 }}>
                        Klimam soğutmuyor, sebebi ne olabilir?
                    </Typography>

                </AccordionSummary>
                <AccordionDetails sx={{ fontFamily: 'arial', fontWeight: '700', backgroundColor: '#e6dbdb' }}>
                    <Typography>
                        Filtre kirliliği, gaz eksikliği, fan veya elektronik aksamdaki problemler gibi farklı nedenler olabilir. Kesin teşhis için servis kontrolü gerekir.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ fontFamily: 'arial', backgroundColor: 'lightblue' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography component="span" sx={{ width: '70%', flexShrink: 0 }}>
                        Servis ücretiniz nasıl belirleniyor?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ fontFamily: 'arial', fontWeight: '700', backgroundColor: '#e6dbdb' }}>
                    <Typography>
                        Ücret yapılacak işleme, arızaya, kullanılacak parçaya ve servis kapsamına göre belirlenir. Detaylı bilgi için iletişime geçebilirsiniz.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

export default AccordionPage