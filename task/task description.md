English version see below

### Einleitung
Um unseren Kunden zu ermöglichen unsere Maschinen ohne Programmierkenntnisse zu "programmieren", möchten wir einen webbasierten Editor erstellen, in dem der Kunde einzelne Prozessschritte anlegen kann und sie zu einer Sequenz aneinanderreihen kann. 
Zu jedem Prozessschritt soll die auszuführende Funktion festgelegt und parametrisiert werden. Welche Funktionen die Maschine beherrscht, wird in einer separaten json-Datei festgelegt.
Je nachdem, ob ein Schritt erfolgreich war oder nicht, soll ein anderer Nachfolger gewählt werden können. Die Sequenz endet damit, dass ein spezieller Prozessschritt aufgerufen wird. Er soll an seinem `StepType` erkennbar sein.

### Zur Verfügung gestellt werden
- Beispielsequenz `sequence_assessment.json`
- Beispieldatei mit verfügbaren Funktionen der Maschine `MachineCapabilities_Assessment.json`

### Abzudeckende Use-Cases
Der Editor soll hierzu in der Lage sein:
- Laden der `MachineCapabilities`-Datei 
- Laden einer vorhandenen Sequenz aus einer json-Datei
- Erstellen einer neuen, leeren Sequenz
- Speichern einer Sequenz
- Anzeigen aller Prozessschritte einer Sequenz
- Neuen Schritt hinzufügen
- Schritt löschen
- Auswählen welche Funktion in einem Schritt ausgeführt werden soll
- Nachfolger von einem Schritt bearbeiten
	- Nachfolgeschritt auswählen
	- weiteren Nachfolger hinzufügen
	- Nachfolger löschen

#### Optionaler Use-Case
Diese sind im Rahmen vom Assessment nicht zwingend umzusetzen. Falls du Lust hast, darfst du ihn aber gerne implementieren. Für die Bewertung soll das allerdings nicht ausschlaggebend sein.
- Parameter der Prozessschritte bearbeiten

### Randbedingungen
- Programmiersprache(n) und Frameworks können frei gewählt werden

### Deliverables
- Lauffähige HTML-Datei(en), mit denen wir den Editor ohne weiteres Tooling im Browser öffnen können.
- Source Code
- Sofern vorhanden: weitere Unterlagen aus der Entwicklung wie Textdokumente, Diagramme oder Zeichnungen.

### Bewertung
- Es soll nicht nur um die Umsetzung gehen, sondern auch darum wie vorgegangen wurde oder worauf besonders geachtet wurde.
- In einem eventuell folgenden Vorstellungsgespräch würden wir die Lösung auch als Diskussionsgrundlage verwenden.



# English Version

### Introduction
In order to enable our customers to "program" our machines without programming knowledge, we would like to create a web-based editor in which the customer can create individual process steps and chain them together to form a sequence. 
The function to be executed is to be defined and parameterized for each process step. The functions that the machine can perform are defined in a separate json file.
Depending on whether a step was successful or not, it should be possible to select a different successor. The sequence ends with a special process step being called. It should be recognizable by its `StepType`.

### The following are provided
- Example sequence `sequence_assessment.json`
- Example file with available functions of the machine `MachineCapabilities_Assessment.json`.

### Use cases to be covered
The Editor should be capable of:
- Loading the `MachineCapabilities` file 
- Loading an existing sequence from a json file
- Creating a new, empty sequence
- Saving a sequence
- Display all process steps of a sequence
- Add a new step
- Delete step
- Select which function is to be executed in a step
- Edit the successor of a step
	- Select successor step
	- Add another successor
	- Delete successor

#### Optional use case
These do not have to be implemented as part of the assessment. However, if you feel like it, you are welcome to implement it. However, this should not be decisive for the assessment.
- Edit the parameters of the process steps

### Boundary conditions
- Programming language(s) and frameworks can be chosen freely

### Deliverables
- Executable HTML file(s) with which we can open the editor in the browser without further tooling.
- Source code
- If available: further documents from the development such as text documents, diagrams or drawings.

### Evaluation
- It should not only be about the implementation, but also about how it was done or what special attention was paid to.
- In a possible subsequent interview, we would also use the solution as a basis for discussion.
