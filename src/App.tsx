import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValuePropositionBar } from './components/ValuePropositionBar';
import { ProductDetailSection } from './components/ProductDetailSection';
import { DialuxCalculator } from './components/DialuxCalculator';
import { ProductCatalogSection } from './components/ProductCatalogSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CorporateCommitmentSection } from './components/CorporateCommitmentSection';
import { QuoteFormSection } from './components/QuoteFormSection';
import { Footer } from './components/Footer';
import { DialuxReportModal } from './components/DialuxReportModal';
import { ProductModal } from './components/ProductModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { CatalogueDownloadModal } from './components/CatalogueDownloadModal';
import { CatalogProduct, ProjectCaseStudy, DialuxParams, DialuxResult } from './types';

export default function App() {
  // Modal states
  const [quickQuoteOpen, setQuickQuoteOpen] = useState(false);
  const [quickQuoteNote, setQuickQuoteNote] = useState('');
  
  const [dialuxReportOpen, setDialuxReportOpen] = useState(false);
  const [dialuxReportData, setDialuxReportData] = useState<{
    params: DialuxParams;
    result: DialuxResult;
  } | null>(null);

  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null);
  const [productModalOpen, setProductModalOpen] = useState(false);

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [caseStudyModalOpen, setCaseStudyModalOpen] = useState(false);

  const [catalogueModalOpen, setCatalogueModalOpen] = useState(false);

  // Form prefill states
  const [prefilledDialux, setPrefilledDialux] = useState<{
    params: DialuxParams;
    result: DialuxResult;
  } | null>(null);
  const [prefilledWattage, setPrefilledWattage] = useState<number | null>(null);

  // Scroll to section helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handlers
  const handleOpenQuote = (defaultText = '') => {
    setQuickQuoteNote(defaultText);
    setQuickQuoteOpen(true);
  };

  const handleOpenQuoteWithWattage = (wattage: number) => {
    setPrefilledWattage(wattage);
    scrollToSection('contact');
  };

  const handleExportDialuxReport = (params: DialuxParams, result: DialuxResult) => {
    setDialuxReportData({ params, result });
    setDialuxReportOpen(true);
  };

  const handleApplyDialuxToQuote = (params: DialuxParams, result: DialuxResult) => {
    setPrefilledDialux({ params, result });
    scrollToSection('contact');
  };

  const handleSelectProduct = (product: CatalogProduct) => {
    setSelectedProduct(product);
    setProductModalOpen(true);
  };

  const handleSelectCaseStudy = (caseStudy: ProjectCaseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setCaseStudyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-sans">
      {/* 1. Top Navigation Bar */}
      <Header
        onOpenQuote={() => handleOpenQuote('Yêu cầu báo giá thiết bị chiếu sáng Highbay')}
        onNavigate={scrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreProducts={() => scrollToSection('spec-detail')}
          onOpenDialux={() => scrollToSection('dialux-calc')}
        />

        {/* 3. 5-Feature Trust Bar */}
        <ValuePropositionBar />

        {/* 4. Detailed Specification (Model HB-H03) */}
        <ProductDetailSection
          onOpenQuoteWithWattage={handleOpenQuoteWithWattage}
          onDownloadCatalogue={() => setCatalogueModalOpen(true)}
        />

        {/* 5. Dialux 3D Calculation Simulation Tool */}
        <DialuxCalculator
          onExportReport={handleExportDialuxReport}
          onApplyToQuote={handleApplyDialuxToQuote}
        />

        {/* 6. Product Catalog Range */}
        <ProductCatalogSection
          onSelectProduct={handleSelectProduct}
          onViewAllProducts={() => scrollToSection('products')}
        />

        {/* 7. Case Studies Portfolio */}
        <CaseStudiesSection
          onSelectCaseStudy={handleSelectCaseStudy}
        />

        {/* 8. Corporate Commitment & Headquarters */}
        <CorporateCommitmentSection />

        {/* 9. Fast RFQ / Project Consultation Form */}
        <QuoteFormSection
          prefilledDialux={prefilledDialux}
          prefilledWattage={prefilledWattage}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenDialux={() => scrollToSection('dialux-calc')}
        onDownloadCatalogue={() => setCatalogueModalOpen(true)}
      />

      {/* Interactive Modals */}
      {dialuxReportData && (
        <DialuxReportModal
          isOpen={dialuxReportOpen}
          onClose={() => setDialuxReportOpen(false)}
          params={dialuxReportData.params}
          result={dialuxReportData.result}
          onApplyToQuote={() => handleApplyDialuxToQuote(dialuxReportData.params, dialuxReportData.result)}
        />
      )}

      <ProductModal
        product={selectedProduct}
        isOpen={productModalOpen}
        onClose={() => setProductModalOpen(false)}
        onRequestQuote={(productName) => {
          handleOpenQuote(`Yêu cầu thông số & báo giá dự án: ${productName}`);
        }}
      />

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        isOpen={caseStudyModalOpen}
        onClose={() => setCaseStudyModalOpen(false)}
        onRequestQuote={() => {
          handleOpenQuote(`Tư vấn giải pháp tương tự dự án: ${selectedCaseStudy?.title}`);
        }}
      />

      <QuickQuoteModal
        isOpen={quickQuoteOpen}
        onClose={() => setQuickQuoteOpen(false)}
        defaultNote={quickQuoteNote}
      />

      <CatalogueDownloadModal
        isOpen={catalogueModalOpen}
        onClose={() => setCatalogueModalOpen(false)}
      />
    </div>
  );
}
