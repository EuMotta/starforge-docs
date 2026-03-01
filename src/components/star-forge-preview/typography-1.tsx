import React from 'react';

import { Typography1 } from '@/components/star-forge/typography-1';

const Typography1Component = () => {
  return (
    <section>
      <Typography1.Header>Example text for &lt;header&gt;</Typography1.Header>
      <Typography1.H1>Example text for &lt;h1&gt;</Typography1.H1>
      <Typography1.H2>Example text for &lt;h2&gt;</Typography1.H2>
      <Typography1.H3>Example text for &lt;h3&gt;</Typography1.H3>
      <Typography1.H4>Example text for &lt;h4&gt;</Typography1.H4>
      <Typography1.H5>Example text for &lt;h5&gt;</Typography1.H5>
      <Typography1.H6>Example text for &lt;h6&gt;</Typography1.H6>
      <Typography1.P>Example text for &lt;p&gt;</Typography1.P>

      <div className="flex flex-col">
        <Typography1.Span>Example text for &lt;span&gt;</Typography1.Span>
        <Typography1.Link href="#">Example text for &lt;a&gt;</Typography1.Link>
        <Typography1.Small>Example text for &lt;small&gt;</Typography1.Small>
        <Typography1.Strong>Example text for &lt;strong&gt;</Typography1.Strong>
        <Typography1.Em>Example text for &lt;em&gt;</Typography1.Em>
        <Typography1.Blockquote>
          Example text for &lt;blockquote&gt;
        </Typography1.Blockquote>
        <Typography1.Cite>Example text for &lt;cite&gt;</Typography1.Cite>
        <Typography1.Q>Example text for &lt;q&gt;</Typography1.Q>
        <Typography1.Abbr title="HyperText Markup Language">
          HTML
        </Typography1.Abbr>
        <Typography1.Del>Example text for &lt;del&gt;</Typography1.Del>
        <Typography1.Ins>Example text for &lt;ins&gt;</Typography1.Ins>
      </div>
    </section>
  );
};

export default Typography1Component;
