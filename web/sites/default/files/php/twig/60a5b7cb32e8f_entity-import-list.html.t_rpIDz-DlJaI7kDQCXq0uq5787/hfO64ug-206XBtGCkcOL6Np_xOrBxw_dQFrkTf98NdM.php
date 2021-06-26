<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/entity_import/templates/entity-import-list.html.twig */
class __TwigTemplate_b4ea62735c1f2be6c82fb62a5f3275e58669bd7acc6511a7d1103c7172697c9a extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 16
        if ( !twig_test_empty(($context["importers"] ?? null))) {
            // line 17
            echo "  <dl>
    ";
            // line 18
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["importers"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["importer"]) {
                // line 19
                echo "      <dt>";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["importer"], "link", [], "any", false, false, true, 19), 19, $this->source), "html", null, true);
                echo "</dt>
      <dd>";
                // line 20
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["importer"], "description", [], "any", false, false, true, 20), 20, $this->source), "html", null, true);
                echo "</dd>
    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['importer'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 22
            echo "  </dl>
";
        } else {
            // line 24
            echo "  <p>
    ";
            // line 25
            $context["add_importer"] = $this->extensions['Drupal\Core\Template\TwigExtension']->getPath("entity.entity_importer.add_form");
            // line 26
            echo "    ";
            echo t("You have not exposed any entity importers yet. Go to the <a href=\"@add_importer\">entity importer creation page</a> to add a new importer or update an existing importer to display as a page.", array("@add_importer" =>             // line 27
($context["add_importer"] ?? null), ));
            // line 29
            echo "  </p>
";
        }
    }

    public function getTemplateName()
    {
        return "modules/entity_import/templates/entity-import-list.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  74 => 29,  72 => 27,  70 => 26,  68 => 25,  65 => 24,  61 => 22,  53 => 20,  48 => 19,  44 => 18,  41 => 17,  39 => 16,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/entity_import/templates/entity-import-list.html.twig", "/var/www/html/web/modules/entity_import/templates/entity-import-list.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 16, "for" => 18, "set" => 25, "trans" => 26);
        static $filters = array("escape" => 19);
        static $functions = array("path" => 25);

        try {
            $this->sandbox->checkSecurity(
                ['if', 'for', 'set', 'trans'],
                ['escape'],
                ['path']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
