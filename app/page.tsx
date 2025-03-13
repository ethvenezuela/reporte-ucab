import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Code, FileCode, GitBranch, GitMerge, GitPullRequest, Layers, Shield, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2 font-bold">
            <GitBranch className="h-5 w-5 text-primary" />
            <span>Análisis de Proyectos Blockchain</span>
          </div>
          <nav className="ml-auto flex gap-4">
            <a href="#resumen" className="text-sm font-medium hover:text-primary">
              Resumen
            </a>
            <a href="#proyectos" className="text-sm font-medium hover:text-primary">
              Proyectos
            </a>
            <a href="#conclusiones" className="text-sm font-medium hover:text-primary">
              Conclusiones
            </a>
          </nav>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        <section id="resumen" className="mb-12">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total de Proyectos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">Implementaciones blockchain</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Blockchains</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Badge
                    variant="outline"
                    className="bg-amber-50 text-amber-700 hover:bg-amber-100 dark:bg-amber-950 dark:text-amber-400"
                  >
                    Ethereum
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-950 dark:text-red-400"
                  >
                    Arbitrum
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-400"
                  >
                    Avalanche
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Tecnologías</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Smart Contracts</Badge>
                  <Badge variant="outline">IPFS</Badge>
                  <Badge variant="outline">Chainlink</Badge>
                  <Badge variant="outline">IoT</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Estado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 dark:text-green-500">Análisis</div>
                <p className="text-xs text-muted-foreground">Proyectos en fase de planificación</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="proyectos" className="mb-12">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">Proyectos</h2>

          <Tabs defaultValue="copyright" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="copyright">Derechos de Autor</TabsTrigger>
              <TabsTrigger value="eaas">EaaS IoT</TabsTrigger>
              <TabsTrigger value="donations">Donaciones</TabsTrigger>
              <TabsTrigger value="project-manager">Gestor de Proyectos</TabsTrigger>
            </TabsList>

            <TabsContent value="copyright" className="mt-6">
              <ProjectTab
                title="Derechos de Autor en la Blockchain"
                student="Rino Tirri"
                blockchain="Arbitrum"
                description="Sistema de registro de derechos de autor utilizando la blockchain de Arbitrum, permitiendo a los usuarios registrar su autoría de obras y verificarla posteriormente."
                processes={[
                  "Registro de autoría mediante contratos inteligentes",
                  "Verificación de autoría",
                  "Interfaz de usuario web",
                  "Manejo de pagos y costos de gas",
                ]}
                advantages={[
                  "Inmutabilidad de registros",
                  "Transparencia y verificación pública",
                  "Descentralización",
                  "Prueba temporal inmutable",
                  "Accesibilidad global",
                  "Reducción de intermediarios",
                  "Automatización de procesos",
                ]}
                disadvantages={[
                  "Costos de gas elevados",
                  "Complejidad técnica para usuarios",
                  "Limitaciones de escalabilidad",
                  "Desafíos de UX/UI",
                  "Incertidumbre sobre valor legal",
                  "Riesgo de pérdida de claves",
                  "Balance entre transparencia y privacidad",
                ]}
                technicalQuestions={[
                  {
                    category: "Wallet receptora y pagos",
                    items: [
                      "Es legal implementar tarifas fijas por servicio mediante contratos inteligentes",
                      "Se puede implementar función setReceiverWallet con modificadores onlyOwner",
                      "Recomendable usar contrato proxy para mayor flexibilidad",
                      "Implementar patrones de control de acceso como Ownable de OpenZeppelin",
                    ],
                  },
                  {
                    category: "Almacenamiento y consulta",
                    items: [
                      "Encriptación off-chain con hashes en blockchain",
                      "Patrones de actualización: Proxy, Diamond, Factory",
                      "Consultas (call) gratuitas, escrituras requieren gas",
                      "Identificadores únicos mediante txHash o contador incremental",
                      "Trazabilidad mediante mapeos entre ID y datos del autor",
                    ],
                  },
                  {
                    category: "Interfaz gráfica",
                    items: [
                      "Usar ethers.js o viem.js para conectar frontend con contratos",
                      "Implementar Web3Modal o RainbowKit para gestión de wallets",
                      "Flujo: formulario web → cálculo de hash → firma de transacción → confirmación",
                    ],
                  },
                  {
                    category: "Almacenamiento",
                    items: [
                      "Ethereum tiene alto costo para almacenamiento directo",
                      "Usar IPFS, Arweave o Filecoin para archivos grandes",
                      "Verificación de duplicados mediante hash del archivo",
                    ],
                  },
                ]}
                contracts={[
                  {
                    name: "CopyrightFactory.sol",
                    description: "Creación de registros, contabilidad y administración de tarifas",
                  },
                  {
                    name: "CopyrightRegistry.sol",
                    description: "Almacenamiento de registros, consultas y verificación",
                  },
                  {
                    name: "AccessControl.sol",
                    description: "Gestión de roles, permisos y configuración",
                  },
                ]}
                implementation={[
                  {
                    phase: "Diseño",
                    duration: "2-3 meses",
                    tasks: [
                      "Arquitectura de contratos inteligentes",
                      "Diseño de interfaz de usuario",
                      "Definición del modelo económico",
                      "Investigación legal sobre derechos de autor digitales",
                    ],
                  },
                  {
                    phase: "Desarrollo",
                    duration: "3-4 meses",
                    tasks: [
                      "Contratos inteligentes con patrones de seguridad",
                      "Frontend web con React/Next.js",
                      "Integración con IPFS",
                      "Implementación de autenticación vía wallet",
                    ],
                  },
                  {
                    phase: "Testing",
                    duration: "1-2 meses",
                    tasks: [
                      "Pruebas en testnet (Arbitrum Goerli)",
                      "Auditorías de seguridad",
                      "Pruebas de usabilidad con usuarios reales",
                      "Stress testing del sistema",
                    ],
                  },
                  {
                    phase: "Lanzamiento",
                    duration: "1 mes + soporte continuo",
                    tasks: [
                      "Despliegue en mainnet",
                      "Campaña de marketing y educación",
                      "Soporte y documentación",
                      "Monitoreo continuo",
                    ],
                  },
                  {
                    phase: "Iteración",
                    duration: "continuo",
                    tasks: ["Recopilación de feedback", "Mejoras incrementales", "Adaptación a cambios regulatorios"],
                  },
                ]}
                architecture={`
+------------------+      +---------------------+     +----------------+
| Frontend Web     |      | Contratos Ethereum  |     | Almacenamiento |
| - React/Next.js  | <--> | - Copyright Factory | <-> | - IPFS         |
| - ethers.js      |      | - Registry          |     | - Filecoin     |
| - Web3Modal      |      | - AccessControl     |     +----------------+
+------------------+      +---------------------+
         ^                           ^
         |                           |
         v                           v
+------------------+      +---------------------+
| Autenticación    |      | Oráculos            |
| - Wallet Connect |      | - Chainlink (tiempo)|
| - MetaMask       |      | - API externas      |
+------------------+      +---------------------+
                `}
              />
            </TabsContent>

            <TabsContent value="eaas" className="mt-6">
              <ProjectTab
                title="Modelo de negocios EaaS en aplicaciones IoT con Web3"
                student="Vicky Bettencourt"
                blockchain="Avalanche"
                description="Modelo de Equipment as a Service (EaaS) para aplicaciones IoT utilizando blockchain de Avalanche y oráculos de Chainlink para la gestión de datos IoT y pagos basados en uso real."
                processes={[
                  "Recopilación de datos IoT mediante sensores",
                  "Transmisión de datos a la blockchain vía oráculos",
                  "Ejecución de contratos inteligentes basados en datos IoT",
                  "Sistema de pagos basado en uso real verificado",
                ]}
                advantages={[
                  "Transparencia en medición de uso",
                  "Automatización de pagos sin intervención humana",
                  "Datos inmutables y verificables",
                  "Nuevos modelos de negocio (pay-per-use, suscripciones dinámicas)",
                  "Reducción de costos operativos",
                  "Optimización de recursos",
                  "Mantenimiento predictivo",
                ]}
                disadvantages={[
                  "Complejidad técnica (IoT, Chainlink, Avalanche)",
                  "Costos recurrentes de oráculos y transacciones",
                  "Latencia entre generación de datos y confirmación",
                  "Vulnerabilidad de dispositivos físicos",
                  "Requisitos técnicos para dispositivos IoT",
                  "Resistencia a la adopción",
                  "Desafíos de escalabilidad para grandes volúmenes",
                ]}
                technicalQuestions={[
                  {
                    category: "Tecnologías combinadas",
                    items: [
                      "Avalanche + Chainlink es viable y recomendable",
                      "Avalanche ofrece alta velocidad y bajos costos",
                      "Chainlink provee infraestructura de oráculos para datos IoT",
                      "Ambas plataformas son compatibles con EVM",
                    ],
                  },
                  {
                    category: "Demostración del prototipo",
                    items: [
                      "Válido simular datos de máquinas para el prototipo",
                      "Crear servidor que emita datos simulados a intervalos",
                      "Usar datos históricos con variaciones aleatorias",
                      "Mostrar cómo los datos disparan eventos en blockchain",
                    ],
                  },
                  {
                    category: "Presentación del prototipo",
                    items: [
                      "Presentar contexto y problema de negocio",
                      "Explicar arquitectura tecnológica",
                      "Demostrar prototipo funcionando",
                      "Mostrar código y contratos",
                      "Explicar modelo económico",
                    ],
                  },
                  {
                    category: "Implementación de tokens",
                    items: [
                      "LINK para servicios de Chainlink",
                      "AVAX para gas en transacciones",
                      "Considerar token propio para el servicio EaaS",
                      "Usar Avalanche C-Chain para compatibilidad EVM",
                    ],
                  },
                ]}
                contracts={[
                  {
                    name: "EaaSRegistry.sol",
                    description: "Registro de equipos, capacidades, tarifas e historial",
                  },
                  {
                    name: "PaymentProcessor.sol",
                    description: "Gestión de pagos, escrow y distribución de ingresos",
                  },
                  {
                    name: "DataConsumer.sol",
                    description: "Integración con Chainlink, validación de datos IoT",
                  },
                  {
                    name: "TokenEaaS.sol (opcional)",
                    description: "Token de utilidad, staking y gobernanza",
                  },
                ]}
                implementation={[
                  {
                    phase: "Diseño",
                    duration: "2-3 meses",
                    tasks: [
                      "Arquitectura IoT (sensores, protocolos, gateway)",
                      "Arquitectura blockchain (contratos, oráculos, tokens)",
                      "Diseño de experiencia de usuario y dashboard",
                      "Definición del modelo de negocio y tarifas",
                    ],
                  },
                  {
                    phase: "Desarrollo",
                    duration: "4-6 meses",
                    tasks: [
                      "Desarrollo de firmware para dispositivos IoT",
                      "Implementación de gateway y procesamiento edge",
                      "Integración con nodos de Chainlink",
                      "Desarrollo de contratos en Avalanche",
                      "Dashboard web para visualización y control",
                    ],
                  },
                  {
                    phase: "Testing",
                    duration: "2-3 meses",
                    tasks: [
                      "Pruebas con dispositivos reales",
                      "Simulación de escenarios de uso y estrés",
                      "Pruebas de rendimiento y escalabilidad",
                      "Auditoría de seguridad de contratos",
                      "Validación con usuarios potenciales",
                    ],
                  },
                  {
                    phase: "Lanzamiento",
                    duration: "fase gradual",
                    tasks: [
                      "Despliegue piloto con usuarios seleccionados (2-3 meses)",
                      "Iteración basada en retroalimentación (1-2 meses)",
                      "Escalamiento gradual a más usuarios (6+ meses)",
                      "Expansión a nuevos mercados verticales",
                    ],
                  },
                  {
                    phase: "Monitoreo y Mejora",
                    duration: "continuo",
                    tasks: [
                      "Análisis de datos de uso y rendimiento",
                      "Optimización de costos de oráculos y gas",
                      "Implementación de nuevas características",
                      "Adaptación a nuevos estándares",
                    ],
                  },
                ]}
                architecture={`
+------------------+    +------------------+    +------------------+
| Dispositivos IoT |    | Chainlink        |    | Avalanche        |
| - Sensores       | -> | - External Adapters | -> | - Contratos EaaS |
| - Actuadores     |    | - Functions      |    | - Tokens         |
| - Microcontrola. |    | - Automation     |    | - Pagos          |
+------------------+    +------------------+    +------------------+
         ^                        ^                      ^
         |                        |                      |
         v                        v                      v
+------------------+    +------------------+    +------------------+
| Gateway IoT      |    | Almacenamiento   |    | Frontend Web     |
| - EdgeComputing  | <> | - IPFS/Filecoin  | <> | - Dashboard      |
| - PreProcesado   |    | - DB tradicional |    | - Control        |
+------------------+    +------------------+    +------------------+
                `}
              />
            </TabsContent>

            <TabsContent value="donations" className="mt-6">
              <ProjectTab
                title="Plataforma de Donaciones con Ethereum"
                student="Juan José Cammarano"
                blockchain="Ethereum"
                description="Plataforma de donaciones similar a GoFundMe pero utilizando Ethereum para garantizar transparencia y trazabilidad de los fondos donados."
                processes={[
                  "Creación de campañas con objetivos y descripciones",
                  "Donaciones en ETH o tokens ERC-20",
                  "Trazabilidad y seguimiento de fondos",
                  "Verificación de legitimidad de campañas",
                ]}
                advantages={[
                  "Transparencia total de donaciones",
                  "Trazabilidad de fondos",
                  "Reducción de fraudes",
                  "Accesibilidad global sin fronteras",
                  "Inmutabilidad de transacciones",
                  "Costos reducidos por menos intermediarios",
                  "Automatización de hitos y liberación de fondos",
                ]}
                disadvantages={[
                  "Volatilidad del valor de ETH",
                  "Altos costos de gas para pequeñas transacciones",
                  "Complejidad técnica para usuarios no familiarizados",
                  "Requisitos regulatorios (AML/KYC)",
                  "Desafíos en verificación de campañas",
                  "Limitaciones de escalabilidad de Ethereum",
                  "Percepción de riesgo asociada a criptomonedas",
                ]}
                technicalQuestions={[
                  {
                    category: "Implementación y Despliegue",
                    items: [
                      "Desarrollar aplicación completa (contratos + frontend)",
                      "Smart contracts en Solidity",
                      "Frontend en React/Next.js",
                      "Integración con wallets (MetaMask, WalletConnect)",
                      "Despliegue en testnet y luego mainnet",
                    ],
                  },
                  {
                    category: "Métricas",
                    items: [
                      "Total de donaciones recibidas (ETH/USD)",
                      "Número de donantes únicos",
                      "Tasa de cumplimiento de objetivos",
                      "Tiempo promedio para alcanzar objetivos",
                      "Retención de donantes recurrentes",
                      "Costo promedio de gas por donación",
                      "Distribución geográfica de donantes y campañas",
                    ],
                  },
                  {
                    category: "Plan de Acción",
                    items: [
                      "Desarrollo técnico: contratos, frontend, integración",
                      "Operaciones: verificación, soporte, monitoreo",
                      "Marketing: adquisición, alianzas, concientización",
                      "Monetización: comisiones, servicios premium, verificación",
                    ],
                  },
                ]}
                contracts={[
                  {
                    name: "CampaignFactory.sol",
                    description: "Creación de campañas, registro y verificación",
                  },
                  {
                    name: "Campaign.sol",
                    description: "Recepción de donaciones, gestión de objetivos y plazos",
                  },
                  {
                    name: "DonationTracker.sol",
                    description: "Seguimiento de fondos, reportes y votaciones",
                  },
                ]}
                implementation={[
                  {
                    phase: "Diseño",
                    duration: "2-3 meses",
                    tasks: [
                      "Arquitectura de contratos inteligentes",
                      "Diseño de interfaz de usuario",
                      "Definición de procesos de verificación",
                      "Investigación legal y compliance",
                    ],
                  },
                  {
                    phase: "Desarrollo",
                    duration: "3-4 meses",
                    tasks: [
                      "Contratos inteligentes con tests exhaustivos",
                      "Frontend web con React/Next.js",
                      "Integración con IPFS para almacenamiento",
                      "Implementación de TheGraph para indexación",
                    ],
                  },
                  {
                    phase: "Testing",
                    duration: "1-2 meses",
                    tasks: [
                      "Pruebas en testnet (Goerli/Sepolia)",
                      "Auditorías de seguridad",
                      "Pruebas de usabilidad",
                      "Simulación de escenarios de fraude",
                    ],
                  },
                  {
                    phase: "Lanzamiento",
                    duration: "fase gradual",
                    tasks: [
                      "Beta cerrada con campañas seleccionadas",
                      "Lanzamiento público limitado",
                      "Expansión gradual de características",
                      "Soporte y mejora continua",
                    ],
                  },
                  {
                    phase: "Monetización",
                    duration: "fase continua",
                    tasks: [
                      "Comisiones opcionales (0.1-2%)",
                      "Servicios premium para organizaciones",
                      "Membresías para donantes frecuentes",
                    ],
                  },
                ]}
                architecture={`
+------------------+      +---------------------+     +----------------+
| Frontend         |      | Contratos Ethereum  |     | Servicios      |
| - React/Next.js  | <--> | - CampaignFactory   | <-> | - IPFS         |
| - ethers.js      |      | - Campaign          |     | - TheGraph     |
| - Web3Modal      |      | - DonationTracker   |     | - Notificaciones|
+------------------+      +---------------------+     +----------------+
         ^                           ^
         |                           |
         v                           v
+------------------+      +---------------------+
| Autenticación    |      | Analíticas          |
| - Wallet Connect |      | - Métricas on-chain |
| - Sign Message   |      | - Dashboard         |
+------------------+      +---------------------+
                `}
              />
            </TabsContent>

            <TabsContent value="project-manager" className="mt-6">
              <ProjectTab
                title="Gestor de Proyectos en Blockchain"
                student="Jesus Rodolfo Gil"
                blockchain="Avalanche"
                description="Gestor de proyectos implementado en la blockchain de Avalanche, que permite crear y administrar proyectos de manera descentralizada."
                processes={[
                  "Creación de proyectos con parámetros",
                  "Gestión y seguimiento de tareas",
                  "Control de acceso a proyectos",
                  "Monitoreo del progreso",
                ]}
                advantages={[
                  "Transparencia en cambios registrados",
                  "Colaboración sin intermediarios",
                  "Automatización de pagos por tareas",
                  "Descentralización sin servidor central",
                  "Trazabilidad completa de cambios",
                ]}
                disadvantages={[
                  "Costos de gas por actualizaciones",
                  "Desafíos de UX con latencia blockchain",
                  "Limitaciones para proyectos complejos",
                  "Privacidad de información pública",
                  "Barrera de entrada para usuarios sin experiencia",
                ]}
                technicalQuestions={[
                  {
                    category: "Desafío Principal",
                    items: [
                      "Creación de nuevo contrato para cada proyecto causa dificultades",
                      "Problema de diseño arquitectónico",
                    ],
                  },
                  {
                    category: "Soluciones Propuestas",
                    items: [
                      "Opción 1: Factory Pattern Optimizado - Mayor aislamiento pero más costoso",
                      "Opción 2: Single Contract con Estructuras - Más eficiente pero menos flexible",
                      "Opción 3: Patrón Híbrido con Proxies - Balance entre flexibilidad y eficiencia",
                    ],
                  },
                  {
                    category: "Recomendaciones",
                    items: [
                      "Selección de Patrón: Single Contract para inicio",
                      "Interfaz Frontend-Blockchain: ethers.js, caché, notificaciones",
                      "Optimización de Gas: solo hashes en blockchain, IPFS para datos extensos",
                      "Arquitectura: Frontend React + Contrato Principal + Almacenamiento",
                    ],
                  },
                ]}
                contracts={[
                  {
                    name: "ProjectFactory.sol (Opción 1)",
                    description: "Creación de contratos individuales para cada proyecto",
                  },
                  {
                    name: "ProjectManager.sol (Opción 2)",
                    description: "Único contrato con estructuras para todos los proyectos",
                  },
                  {
                    name: "ProjectProxy.sol (Opción 3)",
                    description: "Contrato principal con proxies para cada proyecto",
                  },
                ]}
                implementation={[
                  {
                    phase: "Rediseño de Arquitectura",
                    duration: "2-3 semanas",
                    tasks: [
                      "Definir estructura de datos óptima",
                      "Crear prototipos de contratos",
                      "Probar eficiencia de gas",
                    ],
                  },
                  {
                    phase: "Implementación Core",
                    duration: "1-2 meses",
                    tasks: ["Desarrollar contratos inteligentes", "Integrar con frontend", "Pruebas en testnet"],
                  },
                  {
                    phase: "Mejoras de UX",
                    duration: "2-3 semanas",
                    tasks: ["Optimizar flujos de usuario", "Reducir fricción de wallet", "Implementar notificaciones"],
                  },
                  {
                    phase: "Lanzamiento Beta",
                    duration: "1 mes",
                    tasks: ["Desplegar en mainnet", "Invitar usuarios iniciales", "Recopilar feedback"],
                  },
                  {
                    phase: "Iteración",
                    duration: "continuo",
                    tasks: [
                      "Implementar mejoras basadas en feedback",
                      "Añadir características avanzadas",
                      "Escalamiento a más usuarios",
                    ],
                  },
                ]}
                architecture={`
+------------------+      +---------------------+     +----------------+
| Frontend React   |      | Contrato Principal  |     | Almacenamiento |
| - Dashboard      | <--> | - ProjectManager    | <-> | - IPFS         |
| - Kanban Board   |      | - UserRegistry      |     | - TheGraph     |
+------------------+      +---------------------+     +----------------+
                `}
                codeExamples={[
                  {
                    title: "Factory Pattern (Opción 1)",
                    code: `contract ProjectFactory {
    mapping(address => Project[]) public projectsByOwner;
    Project[] public allProjects;
    
    function createProject(string memory _name, string memory _description) public returns (address) {
        Project newProject = new Project(_name, _description, msg.sender);
        projectsByOwner[msg.sender].push(newProject);
        allProjects.push(newProject);
        return address(newProject);
    }
    
    function getProjects(address _owner) public view returns (Project[] memory) {
        return projectsByOwner[_owner];
    }
}`,
                  },
                  {
                    title: "Single Contract (Opción 2)",
                    code: `contract ProjectManager {
    struct Project {
        uint256 id;
        string name;
        string description;
        address owner;
        mapping(uint256 => Task) tasks;
        uint256 taskCount;
        bool isActive;
    }
    
    struct Task {
        uint256 id;
        string description;
        address assignee;
        bool completed;
    }
    
    mapping(uint256 => Project) public projects;
    uint256 public projectCount;
    
    function createProject(string memory _name, string memory _description) public returns (uint256) {
        projectCount++;
        projects[projectCount].id = projectCount;
        projects[projectCount].name = _name;
        projects[projectCount].description = _description;
        projects[projectCount].owner = msg.sender;
        projects[projectCount].isActive = true;
        
        return projectCount;
    }
    
    // Funciones adicionales para gestión de tareas...
}`,
                  },
                ]}
              />
            </TabsContent>
          </Tabs>
        </section>

        <section id="conclusiones" className="mb-12">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">Conclusiones Generales</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Tendencias Observadas</CardTitle>
                <CardDescription>Patrones comunes en los proyectos analizados</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Búsqueda de transparencia:</strong> Todos los proyectos utilizan blockchain para
                      proporcionar mayor transparencia.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Desafíos de UX:</strong> Reto común de crear interfaces amigables que oculten la
                      complejidad blockchain.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Escalabilidad:</strong> Elección de redes alternativas a Ethereum (Arbitrum, Avalanche)
                      por costos y escalabilidad.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Integración con sistemas tradicionales:</strong> Búsqueda de puentes entre blockchain y
                      sistemas existentes.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recomendaciones Comunes</CardTitle>
                <CardDescription>Sugerencias aplicables a todos los proyectos</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Enfoque en MVP:</strong> Comenzar con un producto mínimo viable bien definido y escalable.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Priorizar UX:</strong> Diseñar pensando en usuarios no técnicos para facilitar la
                      adopción.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Testing en testnet:</strong> Realizar pruebas exhaustivas antes de despliegues en mainnet.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Auditorías de seguridad:</strong> Fundamental para generar confianza y proteger
                      fondos/datos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Considerar L2/sidechains:</strong> Evaluar soluciones de segunda capa para reducir costos
                      y mejorar escalabilidad.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Documentación clara:</strong> Proporcionar guías detalladas para usuarios y
                      desarrolladores.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Feedback temprano:</strong> Involucrar a usuarios potenciales desde etapas iniciales.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

function ProjectTab({
  title,
  student,
  blockchain,
  description,
  processes,
  advantages,
  disadvantages,
  technicalQuestions,
  contracts,
  implementation,
  architecture,
  codeExamples = [],
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{student}</span>
            <span>•</span>
            <Badge
              variant="outline"
              className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-400"
            >
              {blockchain}
            </Badge>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground">{description}</p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitMerge className="h-5 w-5 text-primary" />
              Procesos Clave
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-6 list-disc space-y-2">
              {processes.map((process, index) => (
                <li key={index}>{process}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Zap className="h-5 w-5 text-green-500" />
                Ventajas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc text-sm space-y-1">
                {advantages.slice(0, 4).map((advantage, index) => (
                  <li key={index}>{advantage}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Shield className="h-5 w-5 text-red-500" />
                Desafíos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc text-sm space-y-1">
                {disadvantages.slice(0, 4).map((disadvantage, index) => (
                  <li key={index}>{disadvantage}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="technical">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Aspectos Técnicos
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              {technicalQuestions.map((question, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-medium">{question.category}</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                    {question.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="contracts">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <FileCode className="h-5 w-5" />
              Contratos Inteligentes
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              {contracts.map((contract, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="font-medium">{contract.name}</h4>
                  <p className="text-sm text-muted-foreground">{contract.description}</p>
                </div>
              ))}

              {codeExamples.length > 0 && (
                <div className="mt-6 space-y-4">
                  <h4 className="font-medium">Ejemplos de Código</h4>
                  {codeExamples.map((example, index) => (
                    <div key={index} className="space-y-2">
                      <h5 className="text-sm font-medium">{example.title}</h5>
                      <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="implementation">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <GitPullRequest className="h-5 w-5" />
              Estrategia de Implementación
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              {implementation.map((phase, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{phase.phase}</h4>
                    <Badge variant="outline">{phase.duration}</Badge>
                  </div>
                  <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="architecture">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Arquitectura Técnica
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-4">
              <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs">
                <code>{architecture}</code>
              </pre>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

