import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function HelpContent() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How do I add a new student?</AccordionTrigger>
        <AccordionContent>
          To add a new student, go to the Students page and click on the "Add New Student" button. Fill in the required information and click "Save" to create the new student record.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How can I view a student's progress?</AccordionTrigger>
        <AccordionContent>
          You can view a student's progress by clicking on their name in the Students table. This will take you to their individual profile page, where you can see their course progress, grades, and other relevant information.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do I create a new chapter?</AccordionTrigger>
        <AccordionContent>
          To create a new chapter, navigate to the Chapters page and click on the "Add New Chapter" button. Fill in the chapter details such as name, subject, and grade level, then click "Save" to create the new chapter.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>How can I generate reports?</AccordionTrigger>
        <AccordionContent>
          To generate reports, go to the Reports page. Here, you can select the type of report you want to generate, such as student performance or course completion rates. Choose the relevant filters and click "Generate Report" to create your desired report.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}