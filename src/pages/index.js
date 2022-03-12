import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '60px',
          textAlign: 'center',
        }}>
          This is a simple test setup for the Docusaurus wiki replacement.
          <br/>
          Docusaurus can host many Wikis/Docs simultaneously.
      </div>
    </Layout>
  );
}

export default Hello;