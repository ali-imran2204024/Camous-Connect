import { useMemo, useState } from 'react';
import { medicalCards } from '../data/medicalCards';
import { FaCopy } from 'react-icons/fa';
import {
  FaAmbulance,
  FaBuilding,
  FaClipboardCheck,
  FaHeartbeat,
  FaHospital,
  FaMicroscope,
  FaNotesMedical,   
  FaPhoneAlt,
  FaPills,
  FaSearch,
  FaShieldAlt,
  FaStethoscope,
  FaUserMd,
} from 'react-icons/fa';

const overviewItems = [
  {
    title: 'Primary Care',
    description: 'Routine checkups, wellness advice, and general health support.',
    icon: FaStethoscope,
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'First Aid Services',
    description: 'Immediate first aid assistance for minor injuries and accidents.',
    icon: FaHeartbeat,
    accent: 'from-rose-500 to-red-500',
  },
  {
    title: 'Basic Medication',
    description: 'Essential medicines available for common student health needs.',
    icon: FaPills,
    accent: 'from-emerald-500 to-green-500',
  },
  {
    title: '24/7 Emergency Support',
    description: 'Round-the-clock help for urgent medical concerns and emergencies.',
    icon: FaAmbulance,
    accent: 'from-orange-500 to-amber-500',
  },
];

const doctors = [
    { 
        name:'Dr. Nipu Kumar Das',
        role:'Advisor, Medical Center',
        initials:'ND',
        availability:'Available daily',

    },
  {
    name: 'Dr. Rani Akter',
    role: 'Senior Medical Officer',
    initials: 'RA',
    availability: 'Available daily',
  },
  {
    name: 'Dr. Mohammad Khurshedul Alam',
    role: 'Senior Medical Officer',
    initials: 'KA',
    availability: 'Available daily',
  },
  {
    name: 'Dr. Mohammad Shahabuddin',
    role: 'Senior Medical Officer',
    initials: 'MS',
    availability: 'Available daily',
  },
  {
    name: 'Dr. Md. Abdullah',
    role: 'Senior Medical Officer',
    initials: 'MA',
    availability: 'Available daily',
  },
   {
    name: 'Md Abdullah Al Noman',
    role: 'Psychologist',
    initials: 'AN',
    availability: 'Monday, Wednesday, Friday',
  },
  {
    name: 'Jamila Haque',
    role: 'Nurse',
    initials: 'JH',
    availability: 'Available daily',
  },
  {
    name: 'Rajesh Dev',
    role: 'Medical Officer',
    initials: 'RD',
    availability: 'Available daily',
  },
  {
    name:'Rupna Das',
    role:'Senior nurse',
    initials: 'RD',
    availability: 'Available daily',
  }
 
];

const scheduleRows = [
  { day: 'Monday', doctor1: 'Dr. Rani Akter', doctor2: 'Dr. Mohammad Khurshedul Alam', doctor3: 'Md Abdullah Al Noman'  },
  { day: 'Tuesday', doctor1: 'Dr. Rani Akter', doctor2: 'Dr. Mohammad Khurshedul Alam', doctor3: 'Dr. Md. Abdullah'},
  { day: 'Wednesday', doctor1: 'Dr. Rani Akter', doctor2: 'Dr. Mohammad Shahabuddin', doctor3: 'Md Abdullah Al Noman'  },
  { day: 'Thursday', doctor1: 'Dr. Mohammad Khurshedul Alam', doctor2: 'Dr. Mohammad Shahabuddin', doctor3: 'Dr. Md. Abdullah'},
  { day: 'Friday', doctor1: 'Dr. Rani Akter', doctor2: 'Dr. Mohammad Khurshedul Alam', doctor3: 'Md Abdullah Al Noman'  },
  { day: 'Saturday', doctor1: 'Dr. Mohammad Shahabuddin', doctor2: 'Dr. Md. Abdullah', doctor3: 'Dr. Rani Akter' },
];

const medicines = [
  // 1. Analgesics, Antipyretics & NSAIDs (Pain, Fever & Inflammation)
  'Paracetamol 500mg (Napa / Ace)',
  'Paracetamol 665mg XR (Napa Extend / Ace XR)',
  'Paracetamol + Caffeine (Napa Extra / Ace Plus)',
  'Ibuprofen 200mg (Flamed / Ibu)',
  'Ibuprofen 400mg (Flamed / Ibu)',
  'Naproxen 250mg (Anaprox / Napryn)',
  'Naproxen 500mg (Anaprox / Napryn)',
  'Naproxen + Esomeprazole 375mg/20mg (Xenopro Plus / Naspro Plus)',
  'Naproxen + Esomeprazole 500mg/20mg (Xenopro Plus / Naspro Plus)',
  'Diclofenac Sodium 50mg (Sufen / Clofen)',
  'Diclofenac Sodium 100mg SR (Sufen SR / Clofen SR)',
  'Aceclofenac 100mg (Flexi / Aclonac)',
  'Ketorolac Tromethamine 10mg (Rolac / Minolac)',
  'Mefenamic Acid 250mg (Fenadin)',
  'Mefenamic Acid 500mg (Fenadin)',
  'Tramadol HCl 50mg (Anadol / Tramadol)',
  'Tramadol + Paracetamol (Parafon / Tramacet)',
  'Aspirin 75mg (Ecosprin / Atrin)',
  'Aspirin 100mg (Ecosprin / Atrin)',
  'Flupirtine Maleate 100mg (Flupit)',

  // 2. Antihistamines & Anti-Allergics (Cold, Cough & Allergy)
  'Fexofenadine HCl 60mg (Fexo / Alatrol)',
  'Fexofenadine HCl 120mg (Fexo / Alatrol)',
  'Fexofenadine HCl 180mg (Fexo / Alatrol)',
  'Desloratadine 5mg (Deslor / Denix)',
  'Cetirizine Di-HCl 10mg (Atova / Alatrol)',
  'Levocetirizine 5mg (Lecet / Loratin)',
  'Rupatadine 10mg (Rupa / Rupafex)',
  'Bilastine 20mg (Bila / Bilashon)',
  'Ebastine 10mg (Ebas / Ebatin)',
  'Loratadine 10mg (Alerid / Loratin)',
  'Chlorpheniramine Maleate 4mg (Histacin)',
  'Hydroxyzine HCl 10mg (Atarax / Axon)',
  'Hydroxyzine HCl 25mg (Atarax / Axon)',
  'Ketotifen 1mg (Tofen / Zaditen)',
  'Montelukast 4mg (Monas / Provair)',
  'Montelukast 5mg (Monas / Provair)',
  'Montelukast 10mg (Monas / Provair)',
  'Levosalbutamol 1mg (Asmasol / Levolin)',
  'Levosalbutamol 2mg (Asmasol / Levolin)',
  'Salbutamol 2mg (Sultolin)',
  'Dextromethorphan + Pseudoephedrine Syrup (Brofex)',
  'Guaifenesin + Levomethadone Syrup (Tusca)',
  'Ivy Leaf Extract Syrup (Adivas / Prospan)',

  // 3. Gastrointestinal Drugs (Acidity, Diarrhea, Vomiting & Spasms)
  'Omeprazole 20mg (Losec / Seclo)',
  'Omeprazole 40mg (Losec / Seclo)',
  'Esomeprazole 20mg (Maxpro / Sergel)',
  'Esomeprazole 40mg (Maxpro / Sergel)',
  'Pantoprazole 20mg (Pantonic / Trupan)',
  'Pantoprazole 40mg (Pantonic / Trupan)',
  'Rabeprazole 20mg (Finix / Razo)',
  'Dexlansoprazole 30mg (Delanix / Dexilant)',
  'Dexlansoprazole 60mg (Delanix / Dexilant)',
  'Antacid Tablet (Chewable) (Antacid / Flatameal)',
  'Antacid Plus Suspension (Antacid Plus / Flatameal Plus)',
  'Aluminium Hydroxide + Magnesium Hydroxide + Simethicone',
  'Domperidone 10mg (Omidon / Motigut)',
  'Domperidone Suspension (Omidon / Motigut)',
  'Metoclopramide 10mg (Melmet)',
  'Ondansetron 4mg (Emistat / Onaseron)',
  'Ondansetron 8mg (Emistat / Onaseron)',
  'Palonosetron 0.5mg (Palon / Paloset)',
  'Mebeverine HCl 135mg (Mev / Colomack)',
  'Mebeverine HCl 200mg SR (Mev SR / Colomack SR)',
  'Alverine Citrate + Simethicone (Alverin / Meteospasmyl)',
  'Hyoscine Butylbromide 10mg (Buscopan / Spasmo)',
  'Tiemonium Methylsulfate 50mg (Algin / Visset)',
  'Tiemonium Methylsulfate Syrup (Algin / Visset)',
  'Metronidazole 200mg (Filmet / Flamet)',
  'Metronidazole 400mg (Filmet / Flamet)',
  'Metronidazole Suspension (Filmet)',
  'Oral Rehydration Salts (ORS) (SMC Oral Saline / Tastyl)',
  'Zinc Sulfate 20mg (Zinc / Baby Zinc)',
  'Loperamide 2mg (Imotil / Lopemid)',
  'Racecadotril 100mg (Race / Racotril)',
  'Lactulose Syrup (Osmolax / Tulac)',
  'Bisacodyl 5mg (Dulcolax / Laxyl)',
  'Ispaghula Husk (Syllium / Fibril)',

  // 4. Antibiotics & Antimicrobials (Infections)
  'Amoxicillin 250mg (Moxacil / Aristomox)',
  'Amoxicillin 500mg (Moxacil / Aristomox)',
  'Amoxicillin + Clavulanic Acid 625mg (Fimoxyl / Bactiv)',
  'Amoxicillin + Clavulanic Acid 1g (Fimoxyl / Bactiv)',
  'Cefixime 200mg (Cef-3 / Fixim)',
  'Cefixime 400mg (Cef-3 / Fixim)',
  'Cefuroxime Axetil 250mg (Cerox / Kilbac)',
  'Cefuroxime Axetil 500mg (Cerox / Kilbac)',
  'Azithromycin 250mg (Zimax / Azithrocin)',
  'Azithromycin 500mg (Zimax / Azithrocin)',
  'Ciprofloxacin 250mg (Ciprocin / Neofloxin)',
  'Ciprofloxacin 500mg (Ciprocin / Neofloxin)',
  'Levofloxacin 250mg (Levo / Levoking)',
  'Levofloxacin 500mg (Levo / Levoking)',
  'Levofloxacin 750mg (Levo / Levoking)',
  'Flucloxacillin 250mg (Phylopen / Fluclox)',
  'Flucloxacillin 500mg (Phylopen / Fluclox)',
  'Cefradine 250mg (Lebac / Cephran)',
  'Cefradine 500mg (Lebac / Cephran)',
  'Doxycycline 100mg (Doxy / Doxocap)',
  'Azithromycin Suspension (Zimax / Azithrocin)',
  'Cefixime Suspension (Cef-3 / Fixim)',
  'Cotrimoxazole 960mg (Bactrim Forte / Resprim)',

  // 5. Vitamins, Minerals & Supplements
  'Vitamin C (Ascorbic Acid) 250mg chewable (Ceevit)',
  'Vitamin C (Ascorbic Acid) 500mg chewable (Ceevit / Vitamin-C)',
  'Vitamin D3 (Cholecalciferol) 20,000 IU (D-Rise / d3)',
  'Vitamin D3 (Cholecalciferol) 40,000 IU (D-Rise / d3)',
  'Vitamin B-Complex (Bicofol / B-50 Forte)',
  'Vitamin B1 + B6 + B12 (Neurobion / Neobion)',
  'Calcium Carbonate 500mg (Calbo / Calcium)',
  'Calcium + Vitamin D3 (Calbo-D / Ostocal-D)',
  'Calcium + Vitamin D3 + Minerals (Calbo-M / Ostocal-M)',
  'Iron + Folic Acid (Fefol / Aristo-Fer)',
  'Iron + Folic Acid + Zinc (Fefol-Z / Zip-CI)',
  'Multivitamin & Multimineral A-Z (Filwel Gold / Centravit)',
  'Vitamin E 200mg (E-Gel / E-Cap)',
  'Vitamin E 400mg (E-Gel / E-Cap)',
  'Zinc + Vitamin C (Surbex-Zinc / Zevit)',
  'Folic Acid 5mg (Folison)',
  'Biotin 5mg (Biotin)',

  // 6. Cardiovascular & Anti-Hypertensive Drugs (Faculty/Staff Care)
  'Amlodipine 5mg (Camlodin / Amdocal)',
  'Amlodipine 10mg (Camlodin / Amdocal)',
  'Losartan Potassium 25mg (Angilock / Protan)',
  'Losartan Potassium 50mg (Angilock / Protan)',
  'Losartan Potassium 100mg (Angilock / Protan)',
  'Losartan + Hydrochlorothiazide 50mg/12.5mg (Angilock Plus)',
  'Olmesartan Medoxomil 20mg (Olmetec / Olmesan)',
  'Olmesartan Medoxomil 40mg (Olmetec / Olmesan)',
  'Telmisartan 40mg (Telmi / Angitel)',
  'Telmisartan 80mg (Telmi / Angitel)',
  'Bisoprolol Fumarate 2.5mg (Bizoran / Bisocard)',
  'Bisoprolol Fumarate 5mg (Bizoran / Bisocard)',
  'Metoprolol Tartrate 25mg (Betaloc)',
  'Metoprolol Tartrate 50mg (Betaloc)',
  'Carvedilol 6.25mg (Carva / Cardivas)',
  'Carvedilol 12.5mg (Carva / Cardivas)',
  'Atorvastatin 10mg (Atova / Lipiget)',
  'Atorvastatin 20mg (Atova / Lipiget)',
  'Rosuvastatin 5mg (Rovasta / Rosuva)',
  'Rosuvastatin 10mg (Rovasta / Rosuva)',
  'Rosuvastatin 20mg (Rovasta / Rosuva)',
  'Glyceryl Trinitrate (GTN) Spray (Nitromint)',
  'Clopidogrel 75mg (Anclog / Lopirel)',

  // 7. Anti-Diabetic Medications (Faculty/Staff Care)
  'Metformin HCl 500mg (Comet / Metfo)',
  'Metformin HCl 850mg (Comet / Metfo)',
  'Metformin HCl 1000mg SR (Comet XR / Metfo SR)',
  'Gliclazide 30mg MR (Glicron MR / Diapro MR)',
  'Gliclazide 60mg MR (Glicron MR / Diapro MR)',
  'Glimepiride 1mg (Secrin / Amaryl)',
  'Glimepiride 2mg (Secrin / Amaryl)',
  'Sitagliptin 50mg (Januvia / Sitalog)',
  'Sitagliptin 100mg (Januvia / Sitalog)',
  'Linagliptin 5mg (Trajenta / Linalog)',
  'Linagliptin + Metformin 2.5mg/500mg (Tragentamet / Linamet)',
  'Linagliptin + Metformin 2.5mg/850mg (Tragentamet / Linamet)',
  'Empagliflozin 10mg (Jardiance / Empa)',
  'Empagliflozin 25mg (Jardiance / Empa)',
  'Vildagliptin 50mg (Galvus / Vilda)',

  // 8. Respiratory & Asthma Care (Inhalers & Nebulizers)
  'Salbutamol Inhaler (Sultolin HFA / Azmasol HFA)',
  'Fluticasone + Salmeterol Inhaler 125mcg (Seretide / Pexair)',
  'Fluticasone + Salmeterol Inhaler 250mcg (Seretide / Pexair)',
  'Budesonide + Formoterol Inhaler 200mcg (Symbicort / Respicort)',
  'Budesonide + Formoterol Inhaler 400mcg (Symbicort / Respicort)',
  'Tiotropium Bromide Inhaler (Tio / Spiriva)',
  'Salbutamol Respirator Solution for Nebulizer (Sultolin)',
  'Ipratropium Bromide Nebulizer Solution (Ipratop)',
  'Budesonide Nebulizer Suspension (Benacort)',
  'Doxofylline 200mg (Doxovent / Doxobid)',
  'Doxofylline 400mg (Doxovent / Doxobid)',
  'Bambuterol 10mg (Bambuter / Bambec)',

  // 9. Topical Preparations (Creams, Ointments & Gels)
  'Mupirocin 2% Ointment (Mupirocin / Bactroban)',
  'Neomycin + Bacitracin Ointment (Neobacin / Bacicin)',
  'Silver Sulfadiazine 1% Cream (Burnsil / Burnex)',
  'Povidone-Iodine 10% Ointment (Povidone / Jod)',
  'Hydrocortisone 1% Cream (Cortisyl)',
  'Clobetasol Propionate 0.05% Cream (Dermovate / Clobet)',
  'Betamethasone Dipropionate Cream (Betnovate)',
  'Clotrimazole 1% Cream (Gyno-Pevaryl / Candid)',
  'Miconazole Nitrate 2% Cream (Daktarin / Micoral)',
  'Ketoconazole 2% Cream (Danazol / Ketocon)',
  'Permethrin 5% Cream (Scabex / Loxil)',
  'Diclofenac Gel (Sufen Gel / Clofen Gel)',
  'Ketorolac Gel (Rolac Gel)',
  'Benzoyl Peroxide 5% Gel (Benoxyl)',
  'Adaphalene 0.1% Gel (Adela / Adafin)',
  'Fusidic Acid 2% Cream (Fucidin / Fusid)',
  'Salicylic Acid Ointment (Salicyl)',
  'Calamine Lotion (Calamine / Calo)',

  // 10. Eye, Ear & Nose Drops
  'Chloramphenicol 1% Eye Drops (Chlomet)',
  'Moxifloxacin 0.5% Eye Drops (Moxisight / Optamox)',
  'Tobramycin 0.3% Eye Drops (Toba / Tobrin)',
  'Ciprofloxacin Eye/Ear Drops (Ciprocin)',
  'Gentamicin Eye/Ear Drops (Gentin)',
  'Timolol 0.5% Eye Drops (Timolol / Optipres)',
  'Ketotifen Eye Drops (Tofen Eye Drops)',
  'Olopatadine Eye Drops (Olopat / Oladin)',
  'Artificial Tears / Carboxymethylcellulose (Tears Natural / Refresh)',
  'Xylometazoline 0.1% Nasal Drops (Adult) (Antazol / Xylomet)',
  'Xylometazoline 0.05% Nasal Drops (Infant) (Antazol / Xylomet)',
  'Fluticasone Furoate Nasal Spray (Fixonase / Flomist)',
  'Mometasone Furoate Nasal Spray (Momet / Monas Spray)',
  'Normal Saline Nasal Drops (Solo / Nasal Saline)',
  'Paradichlorobenzene Ear Drops (Wax-out / Waxnil)',

  // 11. Neurology, Mental Health & Stress Management (Exam Stress/Insomnia)
  'Clonazepam 0.5mg (Disopan / Sedil)',
  'Clonazepam 1mg (Disopan / Sedil)',
  'Alprazolam 0.25mg (Xanax / Zolax)',
  'Alprazolam 0.5mg (Xanax / Zolax)',
  'Diazepam 5mg (Sedil)',
  'Escitalopram 5mg (Lextor / Esita)',
  'Escitalopram 10mg (Lextor / Esita)',
  'Sertraline 50mg (Serlift / Serta)',
  'Fluoxetine 20mg (Actin / Flunil)',
  'Amitriptyline 10mg (Amotrip / Tryptin)',
  'Amitriptyline 25mg (Amotrip / Tryptin)',
  'Propropanol HCl 10mg (Indever / Betacap)',
  'Propropanol HCl 40mg (Indever / Betacap)',
  'Pregabalin 25mg (Megalab / Neurova)',
  'Pregabalin 50mg (Megalab / Neurova)',
  'Pregabalin 75mg (Megalab / Neurova)',
  'Gabapentin 300mg (Gaba / Neurotin)',
  'Flunarizine 5mg (Fluzin / Sibelium)',
  'Flunarizine 10mg (Fluzin / Sibelium)',
  'Zolpidem Tartrate 5mg (Zolpid / Eznap)',
  'Zolpidem Tartrate 10mg (Zolpid / Eznap)',

  // 12. Antifungals & Antivirals
  'Fluconazole 50mg (Omastin / Flucon)',
  'Fluconazole 150mg (Omastin / Flucon)',
  'Fluconazole 200mg (Omastin / Flucon)',
  'Itraconazole 100mg (Itracon / Itra)',
  'Ketoconazole 200mg (Danazol)',
  'Terbinafine 250mg (Terbina / Terbinax)',
  'Nystatin Oral Drops (Nystat / Mycostatin)',
  'Acyclovir 200mg (Virux / Acyvir)',
  'Acyclovir 400mg (Virux / Acyvir)',
  'Acyclovir 5% Cream (Virux Cream)',

  // 13. Anthelmintics (Deworming)
  'Albendazole 400mg (Alben / Almex)',
  'Albendazole Chewable Tablet (Alben / Almex)',
  'Mebendazole 100mg (Meben)',
  'Ivermectin 6mg (Ivera / Scabo)',
  'Ivermectin 12mg (Ivera / Scabo)',

  // 14. Emergency, Injectables & First Aid Intravenous Fluids
  'Paracetamol IV Infusion 1g/100ml (Ace IV / Napa IV)',
  'Normal Saline (0.9% NaCl) 500ml Infusion',
  'Normal Saline (0.9% NaCl) 1000ml Infusion',
  'Cholera Saline 500ml Infusion',
  'Cholera Saline 1000ml Infusion',
  'Dextrose 5% in Aqua 500ml Infusion',
  'Dextrose 5% in Normal Saline (DNS) 1000ml Infusion',
  'Hartmann’s Solution (Ringer\'s Lactate) 500ml Infusion',
  'Inj. Diclofenac Sodium 75mg/2ml IM',
  'Inj. Ketorolac Tromethamine 30mg/ml IV/IM',
  'Inj. Tramadol HCl 100mg/2ml IV/IM',
  'Inj. Omeprazole 40mg IV',
  'Inj. Esomeprazole 40mg IV',
  'Inj. Ondansetron 8mg/2ml IV',
  'Inj. Tiemonium Methylsulfate 5mg/2ml IV/IM',
  'Inj. Hydrocortisone 100mg IV',
  'Inj. Dexamethasone 4mg/ml IV/IM',
  'Inj. Pheniramine Maleate 2ml IM (Avil)',
  'Inj. Furosemide 20mg/2ml IV (Lasix)',
  'Inj. Diazepam 10mg/2ml IV',
  'Inj. Atropine Sulfate 0.6mg/ml IV',
  'Inj. Adrenaline (Epinephrine) 1mg/ml IV/IM',
  'Inj. Tranexamic Acid 500mg/5ml IV',
  'Tetanus Toxoid Vaccine (TT Vaccine)',

  // 15. Miscellaneous Emergency Medications & Antispasmodics
  'Oral Glucose Powder (Gluco-D)',
  'Tranexamic Acid 500mg Tablet (Tracid / Xeramic)',
  'Charcoal Activated 250mg (Charcoal)',
  'Domperidone Suppository 15mg (Omidon / Motigut Suppository)',
  'Domperidone Suppository 30mg (Omidon / Motigut Suppository)',
  'Paracetamol Suppository 125mg (Napa / Ace Suppository)',
  'Paracetamol Suppository 250mg (Napa / Ace Suppository)',
  'Paracetamol Suppository 500mg (Napa / Ace Suppository)',
  'Diclofenac Suppository 50mg (Clofen Suppository)',
  'Hydrogen Peroxide Solution',
  'Povidone-Iodine 10% Solution (Solodine / Jod Solution)',
  'Surgical Spirit / Rubbing Alcohol',
  'Savlon Liquid Antiseptic',
  'Chlorhexidine Gluconate Mouthwash (Cool / Oralon)',
  'Potassium Permanganate Crystals',

  // 16. Gynecology & Women\'s Health (Vital for University Demographics)
  'Norethisterone 5mg (Primolut-N / Norlut)',
  'Medroxyprogesterone 10mg (Provera)',
  'Mefenamic Acid + Tranexamic Acid (Trapic-MF)',
  'Clotrimazole Vaginal Suppository 100mg (Gyno-Pevaryl)',
  'Clotrimazole Vaginal Suppository 500mg (Gyno-Pevaryl)',
  'Oral Contraceptive Pill - Low Dose (Femicon / Ovostat)',
  'Emergency Contraceptive Pill (Levonorgestrel 1.5mg) (Emcon / Pill-72)',

  // 17. Muscle Relaxants & Bone Joint Support (Sports/Gym Injuries)
  'Tolperisone HCl 50mg (Myolax / Myoson)',
  'Tolperisone HCl 150mg (Myolax / Myoson)',
  'Tizanidine 2mg (Tizan / Sirdalud)',
  'Baclofen 5mg (Baclofam / Flexibac)',
  'Baclofen 10mg (Baclofam / Flexibac)',
  'Glucosamine Sulfate 500mg (Cartilage / Jointix)',
  'Glucosamine + Chondroitin (Cartilage Plus / Jointix Plus)',
  'Diacerein 50mg (Dicerin)',

  // 18. Urology & Urinary Tract Care
  'Nitrofurantoin 100mg (Uroget / Nitroback)',
  'Phenazopyridine 200mg (Pyridium)',
  'Tamsulosin HCl 0.4mg (Uromax / Tamsin)',
  'Potassium Citrate Oral Solution (Urikal / K-Citrate)',

  // 19. Dermatology Oral Medications
  'Isotretinoin 10mg (Acnotrex)',
  'Isotretinoin 20mg (Acnotrex)',
  'Griseofulvin 500mg (Fulvin)',

  // 20. Skin Safeguards & Antiseptics
  'Benzyl Benzoate Lotion',
  'Ketoconazole 2% Anti-dandruff Shampoo (Danazol Shampoo / Select Plus)',
  'Permethrin 1% Rinse/Shampoo (For head lice management)'
];
const featuredMedicines = [
  'Paracetamol',
  'Napa',
  'Napa Extra',
  'Antacid',
  'Omeprazole',
  'Histacin',
  'Saline',
  'ORS',
];
const diagnosticTests = [
  { name: 'CBC', color: 'from-cyan-500 to-blue-500' },
  { name: 'Blood Sugar', color: 'from-emerald-500 to-green-500' },
  { name: 'Urine R/E', color: 'from-violet-500 to-purple-500' },
  { name: 'Blood Grouping', color: 'from-orange-500 to-amber-500' },
  { name: 'ECG', color: 'from-rose-500 to-pink-500' },
];

const contacts = [
  {
    title: 'Medical Center',
    phone: '+880 1700-000000',
    icon: FaHospital,
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Ambulance Service',
    phone: '+880 1900-000111',
    icon: FaAmbulance,
    accent: 'from-rose-500 to-red-500',
  },
  {
    title: 'Proctor Office',
    phone: '+880 1600-001234',
    icon: FaShieldAlt,
    accent: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Security Office',
    phone: '+880 1500-005678',
    icon: FaBuilding,
    accent: 'from-emerald-500 to-green-500',
  },
];
const telemedicineDoctors = [
  {
    name: 'Dr. Rani Akter',
    specialty: 'General Medicine',
    status: 'Online',
  },
  {
    name: 'Dr. Mohammad Khurshedul Alam',
    specialty: 'General Medicine',
    status: 'Online',
  },
  {
    name: 'Md Abdullah Al Noman',
    specialty: 'Psychological Counseling',
    status: 'Available Today',
  },
];

const emergencyHotlines = [
  {
    title: 'Medical Center',
    phone: '031-000000',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Ambulance 1',
    phone: '017xxxxxxxx',
    color: 'from-red-500 to-rose-600',
  },
  {
    title: 'Ambulance 2',
    phone: '018xxxxxxxx',
    color: 'from-red-500 to-orange-600',
  },
  {
    title: 'Ambulance 3',
    phone: '019xxxxxxxx',
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Power Station',
    phone: '031-xxxxxxx',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Fire Service',
    phone: '015xxxxxxxx',
    color: 'from-red-600 to-red-800',
  },
  {
    title: 'Security Office',
    phone: '017xxxxxxxx',
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Proctor Office',
    phone: '018xxxxxxxx',
    color: 'from-purple-500 to-indigo-600',
  },
];
const EmergencyServicesPage = () => {
  const [medicineQuery, setMedicineQuery] = useState('');
  const [studentId, setStudentId] = useState('2004050');
  const [searchedStudentId, setSearchedStudentId] = useState('2004050');

  const filteredMedicines = useMemo(() => {
    const query = medicineQuery.toLowerCase();
    return medicines.filter((medicine) => medicine.toLowerCase().includes(query));
  }, [medicineQuery]);


const searchedCard = medicalCards.find(
  (card) => card.studentId === searchedStudentId
);


const copyNumber = (number: string) => {
  navigator.clipboard.writeText(number);
  alert(`Copied: ${number}`);
};

{/*telimedicine messaage */}
const [showConsultation, setShowConsultation] = useState(false);
const [message, setMessage] = useState('');

  return (
    // heading part 
    <div className="space-y-8 py-8">
      <section className="rounded-[2rem] border border-[#e5e7eb] bg-gradient-to-br from-[#FDF5E6] via-[#AFEEEE] to-[#10b981] p-8 text-white shadow-2xl">
        <div className="max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-3 text-xl text-black font-bold backdrop-blur">
            <FaHeartbeat /> Student Medical Services
          </div>
          <h1 className="text-5xl font-bold text-[#ED3207] text-5xl">CUET Medical Center</h1>
          <p className="mt-4 max-w-3xl text-xl font-bold text-[#1f2937]">
            Medical services, doctor schedules, medicine availability, diagnostic services, and student medical card information.
          </p>
        </div>
      </section>

        {/* Emergency Quick Contacts */}
<section>
  <div className="mb-4 flex items-center gap-2">
  
    <h2 className="text-3xl font-black text-[#ED3207]">
      Emergency Quick Contacts
    </h2>
  </div>

  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {emergencyHotlines.map((contact) => (
      <div
        key={contact.title}
        className={`
          rounded-2xl
          bg-gradient-to-r
          ${contact.color}
          p-5
          text-white
          
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-2
          hover:scale-105
          hover:shadow-2xl
        `}
      >
        <div className="flex items-center gap-3">
          <FaPhoneAlt size={20} />
          <div>
            <h3 className="text-2xl font-bold">
              {contact.title}
            </h3>

            <div className="mt-1 flex items-center gap-2">
  <p className="text-base font-semibold">
    {contact.phone}
  </p>

  <button
    onClick={() => copyNumber(contact.phone)}
    className="
      rounded-lg
      bg-white/20
      p-2
      transition-all
      duration-300
      hover:bg-white/30
      hover:scale-110
    "
    title="Copy Number"
  >
    <FaCopy size={14} />
  </button>
</div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      <section className="grid gap-6 lg:grid-cols-2">
        {overviewItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-[#e5e7eb] bg-blue-100 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-r ${item.accent} p-4 text-white`}>
                <Icon size={24} />
              </div>
              <h3 className="text-3xl font-bold text-[#FF4500]">{item.title}</h3>
              <p className="mt-3 text-xl font-semibold text-black">{item.description}</p>
              <div className="mt-4 text-sm font-semibold text-[#1e3a8a]"></div>
            </div>
          );
        })}
      </section>

    
        
      <section>
        <h2 className="text-3xl font-black text-orange-500">Medical Officers</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 bg-[] xl:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="rounded-[1.5rem] bg-blue-200 border border-[#e5e7eb] bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center  gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-xl font-black text-white">
                  {doctor.initials}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111827]">{doctor.name}</h3>
                  <p className="text-lg font-semibold text-[#1e3a8a]">{doctor.role}</p>
                </div>
              </div>
             
            </div>
          ))}
        </div>
      </section>

          {/* Online Medical Consultation */}
<section className="rounded-[2rem] border border-[#e5e7eb] bg-white p-8 shadow-lg">
  <div className="flex items-center gap-3">
    <FaNotesMedical className="text-[#1e3a8a]" size={28} />

    <h2 className="text-3xl font-black text-[#ED3207]">
      Online Medical Consultation
    </h2>
  </div>

  <p className="mt-3 text-xl font-semibold text-[#374151]">
    Unable to visit the Medical Center physically? Send your health
    concerns and questions directly to a doctor or medical representative.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-3">
    {telemedicineDoctors.map((doctor) => (
      <div
        key={doctor.name}
        className="
          rounded-2xl
          border
          border-[#e5e7eb]
          bg-blue-50
          p-5
          shadow-md
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
        "
      >
        <h3 className="text-2xl font-bold text-[#1e3a8a]">
          {doctor.name}
        </h3>

        <p className="mt-2 text-xl font-semibold text-black">
          {doctor.specialty}
        </p>

        <span
          className="
            mt-3
            inline-block
            rounded-full
            bg-green-500
            px-3
            py-2
            text-sm
            font-bold
            text-white
          "
        >
          {doctor.status}
        </span>

        <button
          className="
            mt-5
            w-full
            rounded-full
            bg-[#1e3a8a]
            py-3
            text-lg
            font-bold
            text-white
            transition-all
            duration-300
            hover:bg-orange-600
            hover:shadow-lg
          "
        >
          Start Consultation
        </button>
      </div>
    ))}
  </div>

  <div className="mt-8 rounded-2xl bg-orange-50 p-5">
    <h3 className="text-2xl font-bold text-[#ED3207]">
      Consultation Features
    </h3>

    <ul className="mt-3 space-y-2 text-xl font-semibold text-black">
      <li>💬 Message a doctor directly.</li>
      <li>📷 Upload prescription or test reports.</li>
      <li>🩺 Ask health-related questions.</li>
      <li>🧠 Mental health consultation support.</li>
      <li>📋 Medication and treatment guidance.</li>
    </ul>
  </div>
</section>





          {/* Weekly Doctor Schedule */}
<section className="rounded-[2rem] border border-[#e5e7eb] bg-white p-6 shadow-sm">
  <div className="flex items-center gap-3">
    <FaUserMd className="text-[#1e3a8a]" size={24} />
    <h2 className="text-3xl font-black text-[#ED3207]">
      Weekly Doctor Schedule
    </h2>
  </div>

  <div className="mt-6 overflow-x-auto">
    <table className="min-w-full overflow-hidden rounded-2xl border border-[#e5e7eb] shadow-lg">
      <thead>
        <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-left text-lg font-bold text-white">
          <th className="px-4 py-4">Day</th>
          <th className="px-4 py-4">Doctor 1</th>
          <th className="px-4 py-4">Doctor 2</th>
          <th className="px-4 py-4">Doctor 3</th>
        </tr>
      </thead>

      <tbody>
        {scheduleRows.map((row) => (
          <tr
            key={row.day}
            className="
              border-t border-[#e5e7eb]
              bg-[#FFF8DC]
              text-lg
              transition-all
              duration-300
              hover:bg-blue-100
            "
          >
            <td className="px-4 py-4 font-bold text-[#111827]">
              {row.day}
            </td>

            <td className="px-4 py-4 font-semibold text-[#1f2937]">
              {row.doctor1}
            </td>

            <td className="px-4 py-4 font-semibold text-[#1f2937]">
              {row.doctor2}
            </td>

            <td className="px-4 py-4 font-semibold text-[#1f2937]">
              {row.doctor3}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  
</section>



      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
  <div className="rounded-[2rem] border border-[#e5e7eb] bg-white p-6 shadow-sm">
    <div className="flex items-center gap-2">
      <FaSearch className="text-[#1e3a8a]" />
      <h2 className="text-3xl font-black text-[#ED3207]">
        Available Medicine Search
      </h2>
    </div>

    <div className="mt-6">
      <label
        className="mb-2 block text-xl font-bold text-[#1f2937]"
        htmlFor="medicine-search"
      >
        Search medicine
      </label>

      <input
        id="medicine-search"
        value={medicineQuery}
        onChange={(event) => setMedicineQuery(event.target.value)}
        placeholder="Type medicine name"
        className="w-full rounded-2xl border border-[#d1d5db] bg-[#f8fafc] px-4 py-3 text-lg outline-none focus:border-[#3b82f6]"
      />
    </div>

    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {(medicineQuery ? filteredMedicines : featuredMedicines).length > 0 ? (
        (medicineQuery ? filteredMedicines : featuredMedicines).map(
          (medicine) => (
            <div
              key={medicine}
              className="
                rounded-[1rem]
                border
                border-[#e5e7eb]
                bg-[#f8fafc]
                p-4
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <div className="flex items-center gap-2 font-bold text-[#111827]">
                <FaPills className=" text-xl text-[#10b981]" />
                {medicine}
              </div>
            </div>
          )
        )
      ) : (
        <div className="rounded-[1rem] border border-dashed border-[#cbd5e1] bg-[#f8fafc] p-4 text-lg font-semibold text-[#4b5563] sm:col-span-2">
          No matching medicine found.
        </div>
      )}
    </div>

    {!medicineQuery && (
      <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-100 p-5 text-center">
        <h3 className="text-xl font-semibold text-black">
          🔍 Search More Medicines
        </h3>
      </div>
    )}
  </div>

  {/* Student Medical Card Search */}
  <div className="rounded-[2rem] border border-[#e5e7eb] bg-white p-6 shadow-sm">
  <div className="flex items-center gap-2">
    <FaClipboardCheck className="text-[#10b981]" />
    <h2 className="text-3xl font-black text-[#ED3207]">
     Search Student Medical Card number
    </h2>
  </div>

  <div className="mt-6 space-y-4">
    <label
      className="block text-2xl font-semibold text-[#1f2937]"
      htmlFor="student-id"
    >
      Student ID
    </label>

    <input
      id="student-id"
      value={studentId}
      onChange={(event) => setStudentId(event.target.value)}
      placeholder="Enter student ID"
      className="w-full rounded-2xl border border-[#d1d5db] bg-[#f8fafc] px-4 py-3 text-lg outline-none focus:border-[#3b82f6]"
    />

    <button
      onClick={() => setSearchedStudentId(studentId)}
      className="rounded-full bg-[#1e3a8a] px-6 py-3 text-lg font-bold text-white transition-all duration-300 hover:bg-[#172554]"
    >
      Search Medical Card
    </button>
  </div>

  <div className="mt-6 rounded-[1.25rem] border border-[#e5e7eb] bg-gradient-to-br from-[#eff6ff] to-[#fef2f2] p-5 shadow-inner">
    {searchedCard ? (
      <>
        <p className="text-lg font-semibold text-[#1e3a8a]">
          Student ID: {searchedCard.studentId}
        </p>

        <div className="mt-4 space-y-3 text-lg">
          <p>
            <span className="font-bold">Card Number:</span>{' '}
            {searchedCard.cardNumber ?? 'Not Issued'}
          </p>

          <p>
            <span className="font-bold">Status:</span>{' '}
            <span
              className={
                searchedCard.status === 'Active'
                  ? 'text-green-600 font-bold'
                  : searchedCard.status === 'Inactive'
                  ? 'text-red-600 font-bold'
                  : 'text-gray-600 font-bold'
              }
            >
              {searchedCard.status}
            </span>
          </p>

          <p>
            <span className="font-bold">Issue Date:</span>{' '}
            {searchedCard.issueDate ?? 'N/A'}
          </p>
        </div>
      </>
    ) : (
      <div className="text-center">
        <p className="text-2xl font-bold text-red-600">
          No Medical Card found
        </p>

        <p className="mt-2 text-xl text-black">
          Please Contact with CUET Medical Center.
        </p>
      </div>
    )}
  </div>
</div>
      </section>
    </div>
  );
};

export default EmergencyServicesPage;
