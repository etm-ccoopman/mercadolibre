import React, { useState } from 'react';
import { Container } from 'reactstrap';
import Breadcrumbs from '../components/General/Breadcrumbs';
import Box from '../components/Home/Box';
import Technologies from '../components/Home/Technologies';

export default function Home() {
  const [showSection, setShowSection] = useState({ initial: false, state: false });

  return (
    <div className="text-start home">
      <Container>
        <Breadcrumbs page="HOME"/>
        <Box showSection={showSection} setShowSection={setShowSection} />
        <Technologies showSection={showSection} setShowSection={setShowSection} />
      </Container>
    </div >
  );
}